import { supabase } from "@/lib/supabase/supabaseClient";
import type { RealtimePostgresInsertPayload } from "@supabase/supabase-js";

export type EventType = "INSERT" | "UPDATE" | "DELETE";
export type GenericCallback<T extends { [key: string]: any }> = (payload: RealtimePostgresInsertPayload<T>) => void;

interface SubscriptionOptions<T extends { [key: string]: any }> {
  tables: string[];
  schema?: string;
  onInsert?: GenericCallback<T>;
  onUpdate?: GenericCallback<T>;
  onDelete?: GenericCallback<T>;
}

export function subscribeToTables<T extends { [key: string]: any }>({
  tables,
  schema = "public",
  onInsert,
  onUpdate,
  onDelete,
}: SubscriptionOptions<T>) {
  const channel = supabase.channel(`public:${tables.join(",")}`);
  tables.forEach((table) => {
    if (onInsert)
      channel.on(
        "postgres_changes" as any,
        { event: "INSERT", schema, table },
        onInsert
      );
    if (onUpdate)
      channel.on(
        "postgres_changes" as any,
        { event: "UPDATE", schema, table },
        onUpdate
      );
    if (onDelete)
      channel.on(
        "postgres_changes" as any,
        { event: "DELETE", schema, table },
        onDelete
      );
  });
  channel.subscribe();
  return channel;
}
