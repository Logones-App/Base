import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/database.types';
import { jwtVerify, createRemoteJWKSet } from 'jose';
import { supabase } from '@/lib/supabase/supabaseClient';

// JWKS fetcher standard (fetcher custom non supporté en JOSE v5+)
const jwksUrl = `${process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/jwks`;
const JWKS = createRemoteJWKSet(new URL(jwksUrl));

export interface JWTPayload {
  sub: string;
  email?: string;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: any;
}

/**
 * Vérifie et décode un JWT Supabase reçu dans le header Authorization.
 * Retourne le payload si le token est valide, sinon null.
 */
export async function verifySupabaseJWT(token: string | undefined): Promise<JWTPayload | null> {
  if (!token) return null;
  try {
    // Tentative de vérification via JWKS (future-proof)
    const { payload } = await jwtVerify(token, JWKS);
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      console.error('Token expiré');
      return null;
    }
    return payload as JWTPayload;
  } catch (e) {
    console.error('JWT verification failed (JWKS):', e);
    // Fallback : vérification via supabase.auth.getUser()
    try {
      const supabase = createClient<Database>(
        process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      // Log la clé utilisée pour debug
      console.log('[SUPABASE][SERVER] ANON_KEY utilisé:', (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.slice(0, 12) + '...');
      const { data, error } = await supabase.auth.getUser(token);
      if (error || !data?.user) {
        console.error('Fallback getUser() failed:', error);
        return null;
      }
      // On reconstitue un payload minimal
      return {
        sub: data.user.id,
        email: data.user.email,
        ...data.user.user_metadata,
        ...data.user.app_metadata,
      };
    } catch (err) {
      console.error('Fallback getUser() exception:', err);
      return null;
    }
  }
}

/**
 * Vérifie la validité d'un token JWT
 */
export async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {
    const JWKS = createRemoteJWKSet(
      new URL(`${process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/jwks`)
    );

    const { payload } = await jwtVerify(token, JWKS, {
      issuer: 'https://supabase.auth',
      audience: 'authenticated',
    });

    // Vérification de l'expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      console.error('Token expiré');
      return null;
    }

    return payload as JWTPayload;
  } catch (error) {
    console.error('Erreur de vérification JWT:', error);
    return null;
  }
}

/**
 * Vérifie si un token JWT est valide et non expiré
 */
export async function isTokenValid(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const payload = await verifyJWT(token);
  return payload !== null;
}

/**
 * Vérifie si un utilisateur a un rôle spécifique
 */
export async function hasRole(token: string | undefined, role: string): Promise<boolean> {
  if (!token) return false;
  const payload = await verifyJWT(token);
  return payload?.role === role;
}

/**
 * Vérifie si un token est sur le point d'expirer (dans les 5 minutes)
 */
export async function isTokenExpiringSoon(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const payload = await verifyJWT(token);
  if (!payload?.exp) return false;

  const fiveMinutes = 5 * 60;
  const now = Math.floor(Date.now() / 1000);
  return payload.exp - now < fiveMinutes;
}

/**
 * Vérifie si l'utilisateur a une fonctionnalité spécifique
 * @param userId ID de l'utilisateur à vérifier
 * @param featureName Nom de la fonctionnalité à vérifier
 * @returns Booléen indiquant si l'utilisateur a la fonctionnalité
 */
export async function checkUserHasFeature(userId: string, featureName: string): Promise<boolean> {
  if (!userId) return false;



  const { data, error } = await supabase
    .from('user_features')
    .select('enabled, feature_id, features(name)') // Repassé à enabled
    .eq('user_id', userId)
    .eq('enabled', true); // Repassé à enabled

  if (error) {
    console.error('Error checking user feature:', error);
    return false;
  }

  return (data || []).some((row: any) => row.features?.name === featureName);
}

/**
 * Récupère toutes les fonctionnalités d'un utilisateur
 * @param userId ID de l'utilisateur
 * @returns Liste des noms de fonctionnalités
 */
export async function getUserFeatures(userId: string): Promise<string[]> {
  if (!userId) return [];



  const { data, error } = await supabase
    .from('user_features')
    .select('enabled, feature_id, features(name)') // Repassé à enabled
    .eq('user_id', userId)
    .eq('enabled', true); // Repassé à enabled

  if (error) {
    console.error('Error getting user features:', error);
    return [];
  }

  return (data || [])
    .map((row: any) => row.features?.name)
    .filter(Boolean);
}

/**
 * Helper pour authentifier un admin via JWT + feature admin_manage_features
 * Retourne { authenticated, status, message, userId, supabase }
 */
export async function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
  const jwtPayload = await verifySupabaseJWT(token);
  if (!jwtPayload) {
    return { authenticated: false, status: 401, message: 'Unauthorized', userId: undefined, supabase: undefined };
  }
  const userId = jwtPayload.sub;
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const { data: userFeatures, error } = await supabase
    .from('user_features')
    .select('enabled, feature_id, features(name)')
    .eq('user_id', userId)
    .eq('enabled', true);
  if (error) {
    return { authenticated: false, status: 500, message: 'Error checking permissions', userId, supabase };
  }
  const hasAdminAccess = (userFeatures || []).some((row: any) => row.features?.name === 'admin_manage_features');
  if (!hasAdminAccess) {
    return { authenticated: false, status: 403, message: 'You don\'t have permission to access this resource', userId, supabase };
  }
  return { authenticated: true, status: 200, message: 'Authenticated', userId, supabase };
}
