"use client"

import { useState } from "react"
import MessageForm from "./MessageForm"
import { useRealtimeTable } from "@/lib/legendstate/utils/useRealtimeTable";
import type { TableRow } from "@/lib/supabase/table-types";
import { supabase } from "@/lib/supabase/supabaseClient";

export default function Page() {
    // Utilisation du hook générique pour observer les messages (plus besoin de subscribeTableRealtime ici)
    const messages = useRealtimeTable("messages") as TableRow<"messages">[];
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState("");

    const handleSend = async (content: string) => {
        await supabase.from("messages").insert([{ content }]);
    };

    const handleEdit = (msg: TableRow<"messages">) => {
        setEditingId(msg.id);
        setEditContent(msg.content ?? "");
    };

    const handleUpdate = async (id: string) => {
        if (editContent.trim()) {
            await supabase.from("messages").update({ content: editContent }).eq("id", id);
            setEditingId(null);
            setEditContent("");
        }
    };
    const handleDelete = async (id: string) => {
        await supabase.from("messages").delete().eq("id", id);
    };

    return (
        <main style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
            <h1>Messages en temps réel</h1>
            <MessageForm onSend={handleSend} />
            <ul style={{ listStyle: "none", padding: 0 }}>
                {messages.map((m) => (
                    <li key={m.id} style={{ marginBottom: 12, padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
                        {editingId === m.id ? (
                            <>
                                <input
                                    value={editContent}
                                    onChange={e => setEditContent(e.target.value)}
                                    style={{ marginRight: 8, padding: 4 }}
                                />
                                <button onClick={() => handleUpdate(m.id)} style={{ marginRight: 8 }}>Enregistrer</button>
                                <button onClick={() => setEditingId(null)}>Annuler</button>
                            </>
                        ) : (
                            <>
                                <div>{m.content}</div>
                                <small style={{ color: "#888" }}>{new Date(m.created_at).toLocaleString()}</small>
                                <div style={{ marginTop: 8 }}>
                                    <button onClick={() => handleEdit(m)} style={{ marginRight: 8 }}>Éditer</button>
                                    <button onClick={() => handleDelete(m.id)} style={{ color: "red" }}>Supprimer</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    )
}
