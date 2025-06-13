



"use client";
import { Link } from '@/i18n/navigation';
import {getTranslations} from 'next-intl/server';
import { useState } from "react";
import { useRealtimeTable } from '@/lib/legendstate/utils/useRealtimeTable';
import { useUserPermissions } from '@/lib/legendstate/permissions/useUserPermissions';
import { useUserFeatureNames } from '@/lib/legendstate/permissions/useUserFeatureNames';
import type { TableRow } from '@/lib/supabase/table-types';
import PermissionGuard from '@/lib/legendstate/permissions/PermissionGuard';
import Landing from '@/components/landing/landing';

export default function HomePage() {
  //const t = await getTranslations('HomePage');
  // Utilisation du hook générique pour observer user_features
  const userFeatures = useRealtimeTable('user_features') as TableRow<'user_features'>[];
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editEnabled, setEditEnabled] = useState<boolean | null>(null);

  // Utilisation du hook permissions (realtime)
  const permissions = useUserPermissions();
  const featureNames = useUserFeatureNames();

  // (Pas d'ajout/suppression ici, juste affichage et édition du champ enabled)

  const handleEdit = (row: TableRow<'user_features'>) => {
    setEditingId(String(row.id));
    setEditEnabled(row.enabled ?? null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditEnabled(null);
  };

  // (Pas d'update effectif ici, juste UI, à adapter si tu veux persister)

  return (
    <>

{/* <h1>{t('title')}</h1> */}

    <PermissionGuard features={["can_landing"]}>
        <Landing></Landing>
      </PermissionGuard>
    <main style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>user_features en temps réel</h1>
      <h2>Features autorisées (noms) pour ce user :</h2>
      <ul>
        {featureNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {!featureNames.includes("can_landing") && (
        <div>
          Accéder à la page Landing (si la feature est active)
        </div>
      )}
      <h2>Features autorisées pour ce user :</h2>
      <ul>
        {permissions.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      
      {/* Exemple d'UI conditionnelle selon les droits */}
      <PermissionGuard features={["admin_panel"]}>
        <div style={{ background: '#e0ffe0', padding: 12, borderRadius: 6, marginBottom: 16 }}>
          <b>Section admin_panel visible (permission active)</b>
        </div>
      </PermissionGuard>
      <PermissionGuard features={["feature_x"]}>
        <div style={{ background: '#e0f0ff', padding: 12, borderRadius: 6, marginBottom: 16 }}>
          <b>Section feature_x visible (permission active)</b>
        </div>
      </PermissionGuard>
      {/* Liste brute des user_features pour debug/demo */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {userFeatures.map((f) => (
          <li key={f.id} style={{ marginBottom: 12, padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
            <div><b>id:</b> {f.id}</div>
            <div><b>user_id:</b> {f.user_id}</div>
            <div><b>feature_id:</b> {f.feature_id}</div>
            <div><b>created_at:</b> {f.created_at}</div>
            {editingId === String(f.id) ? (
              <>
                <div>
                  <b>enabled:</b>
                  <select value={editEnabled === null ? '' : String(editEnabled)} onChange={e => setEditEnabled(e.target.value === 'true')}>
                    <option value="">--</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </div>
                <button onClick={handleCancel} style={{ marginTop: 8 }}>Annuler</button>
              </>
            ) : (
              <>
                <div><b>enabled:</b> {String(f.enabled)}</div>
                <button onClick={() => handleEdit(f)} style={{ marginTop: 8 }}>Éditer</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}