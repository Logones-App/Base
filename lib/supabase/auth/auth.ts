import { supabase } from "@/lib/supabase/supabaseClient";

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({ email, password });
}

export async function signIn(email: string, password: string) {
  const result = await supabase.auth.signInWithPassword({ email, password });
  if (result.data?.session?.access_token) {
    await supabase.auth.setSession({
      access_token: result.data.session.access_token,
      refresh_token: result.data.session.refresh_token,
    });
  }
  return result;
}

export async function signOut() {
  return supabase.auth.signOut();
}

export function onAuthStateChange(callback: (user: any) => void) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
}

export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function resetPasswordForEmail(email: string) {
  return supabase.auth.resetPasswordForEmail(email);
}

// Utilitaire fetch sécurisé pour Next.js + Supabase
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const session = await supabase.auth.getSession();
  const accessToken = session.data?.session?.access_token;
  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers ? options.headers : {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  });
}
