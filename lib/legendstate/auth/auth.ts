"use client";
import { useEffect } from 'react';
import { getUser, onAuthStateChange } from '@/lib/supabase/auth/auth';
import { observable } from '@legendapp/state';
import { use$ } from '@legendapp/state/react';
import type { User } from '@supabase/supabase-js';

// Store Legend-State typé pour l'utilisateur connecté
export const authState = observable<{ user: User | null | undefined }>({ user: undefined });

// À appeler UNE SEULE FOIS au niveau racine (layout.tsx ou _app.tsx)
export function useAuthSync() {
  useEffect(() => {
    getUser().then(user => authState.user.set(user));
    const { data: listener } = onAuthStateChange(user => authState.user.set(user));
    return () => { listener?.subscription.unsubscribe(); };
  }, []);
}

// Hook Legend-State natif, ultra-réactif
export function useAuth$() {
  return use$(authState.user);
}

// Hook React classique (optionnel, pour compatibilité)
export function useAuth() {
  const user = use$(authState.user);
  return user;
}