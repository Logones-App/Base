"use client";
import { useUserFeatureNames } from "@/lib/legendstate/permissions/useUserFeatureNames";

export default function PermissionGuard({ children, features }: { children: React.ReactNode; features?: string[] }) {
  const userFeatureNames = useUserFeatureNames();
  // Si features n'est pas fourni, on vérifie "admin_panel" par défaut
  const required = features && features.length > 0 ? features : ["admin_panel"];
  const canAccess = required.every(f => userFeatureNames.includes(f));
  if (!canAccess) return <div>Accès refusé</div>;
  return <>{children}</>;
}