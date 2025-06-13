import { useMemo } from "react";
import { useRealtimeTable } from "@/lib/legendstate/utils/useRealtimeTable";
import type { TableRow } from "@/lib/supabase/table-types";

/**
 * Retourne la liste des noms de features activées pour l'utilisateur courant (en temps réel).
 * Fait le mapping feature_id → name en croisant user_features et features.
 */
export function useUserFeatureNames() {
    const userFeatures = useRealtimeTable("user_features") as TableRow<"user_features">[];
    const features = useRealtimeTable("features") as TableRow<"features">[];
    return useMemo(() => {
        // On ne garde que les features activées et valides
        const enabledIds = userFeatures.filter(f => f.enabled && f.feature_id).map(f => f.feature_id!);
        // On mappe les ids vers les noms
        return features.filter(f => enabledIds.includes(f.id)).map(f => f.name);
    }, [userFeatures, features]);
}
