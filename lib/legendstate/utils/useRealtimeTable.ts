import { useEffect } from "react";
import { use$ } from "@legendapp/state/react";
import { subscribeTableRealtime, dbState } from "@/lib/legendstate/utils/realtimeTools";
import type { TableName, TableRow } from "@/lib/supabase/table-types";

/**
 * Generic hook to subscribe and observe a Supabase table in realtime using Legend-State.
 * @param tableName The table name (must match Supabase table)
 * @returns The observable array of rows (typed)
 */
export function useRealtimeTable<T extends TableName>(tableName: T) {
    useEffect(() => {
        const unsubscribe = subscribeTableRealtime(tableName);
        return () => {
            if (typeof unsubscribe === 'function') unsubscribe();
        };
    }, [tableName]);
    // Legend-State observable for the table
    const rows = use$(dbState[tableName]) as TableRow<T>[] | undefined;
    // Always return an array for safety
    return Array.isArray(rows) ? rows : [];
}
