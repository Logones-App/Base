"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";

type Message = {
  id: string;
  content: string;
  created_at: string;
};

// Supprime la création locale du client Supabase

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Récupère les messages au chargement
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error(error);
      // Cast data to correct type, filtering out nulls and fixing content type
      else
        setMessages(
          (data || []).map((m) => ({
            ...m,
            content: m.content ?? "",
          })) as Message[]
        );
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("realtime:messages")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          console.log("Realtime payload:", payload);
          setMessages((current) => {
            // On force le typage pour éviter les erreurs
            const msg = (payload.new ?? payload.old) as Message | undefined;
            if (!msg) return current;
            switch (payload.eventType) {
              case "INSERT":
                return [msg, ...current];
              case "UPDATE":
                return current.map((m) => (m.id === msg.id ? msg : m));
              case "DELETE":
                return current.filter((m) => m.id !== msg.id);
              default:
                return current;
            }
          });
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Messages en temps réel</h1>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>
            {m.content} —{" "}
            <small>{new Date(m.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
