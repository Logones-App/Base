import { useState } from "react";

export default function MessageForm({ onSend }: { onSend: (content: string) => void }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSend(content.trim());
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Écrire un message..."
        style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "8px 16px", borderRadius: 4, background: "#222", color: "#fff", border: "none" }}>
        Envoyer
      </button>
    </form>
  );
}
