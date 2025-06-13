"use client"

import { useState } from "react";
import { useRealtimeTable } from "@/lib/legendstate/utils/useRealtimeTable";
import type { TableRow } from "@/lib/supabase/table-types";
import { supabase } from "@/lib/supabase/supabaseClient";

export default function FeaturesPage() {
    // Utilisation du hook générique pour observer la table features
    const features = useRealtimeTable("features") as TableRow<"features">[];
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");

    const handleSend = async (name: string) => {
        await supabase.from("features").insert([{ name }]);
    };

    const handleEdit = (feature: TableRow<"features">) => {
        setEditingId(feature.id);
        setEditName(feature.name ?? "");
    };

    const handleUpdate = async (id: string) => {
        if (editName.trim()) {
            await supabase.from("features").update({ name: editName }).eq("id", id);
            setEditingId(null);
            setEditName("");
        }
    };

    const handleDelete = async (id: string) => {
        await supabase.from("features").delete().eq("id", id);
    };

    return (
        <main style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
            <h1>Features en temps réel (hook générique)</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (editName.trim() && !editingId) {
                        handleSend(editName);
                        setEditName("");
                    }
                }}
                style={{ marginBottom: 20 }}
            >
                <input
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    placeholder="Nom de la feature"
                    style={{ marginRight: 8, padding: 4 }}
                />
                <button type="submit" disabled={!!editingId}>Ajouter</button>
            </form>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {features.map((f) => (
                    <li key={f.id} style={{ marginBottom: 12, padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
                        {editingId === f.id ? (
                            <>
                                <input
                                    value={editName}
                                    onChange={e => setEditName(e.target.value)}
                                    style={{ marginRight: 8, padding: 4 }}
                                />
                                <button onClick={() => handleUpdate(f.id)} style={{ marginRight: 8 }}>Enregistrer</button>
                                <button onClick={() => { setEditingId(null); setEditName(""); }}>Annuler</button>
                            </>
                        ) : (
                            <>
                                <div>{f.name}</div>
                                <small style={{ color: "#888" }}>{f.created_at ? new Date(f.created_at).toLocaleString() : ""}</small>
                                <div style={{ marginTop: 8 }}>
                                    <button onClick={() => handleEdit(f)} style={{ marginRight: 8 }}>Éditer</button>
                                    <button onClick={() => handleDelete(f.id)} style={{ color: "red" }}>Supprimer</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    )
}
