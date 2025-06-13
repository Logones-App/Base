import { useMemo } from "react";
import { useRealtimeTable } from "@/lib/legendstate/utils/useRealtimeTable";
import type { TableRow } from "@/lib/supabase/table-types";

/**
 * Returns a list of enabled feature names for the current user, in realtime.
 * Assumes user_features rows have { feature_id, enabled } and only enabled features are returned.
 */
export function useUserPermissions() {
    // Observe the user_features table in realtime
    const userFeatures = useRealtimeTable("user_features") as TableRow<"user_features">[];
    // Only keep enabled features and return their feature_id (or name if joined)
    return useMemo(
        () => userFeatures.filter(f => f.enabled).map(f => f.feature_id).filter(Boolean) as string[],
        [userFeatures]
    );
}
