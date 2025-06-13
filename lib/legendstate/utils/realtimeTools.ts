import { observable, batch } from '@legendapp/state';
import { subscribeToTables } from './realtime';
import { selectRows } from './crud';
import type { TableName, RowWithId } from '@/lib/supabase/table-types';
/* import { layoutState } from './layout/store';
import { authState } from './auth/store';
import { ecommerceState } from './ecommerce/store'; */

// Store global Legend-State pour toutes les tables observées (clé = nom de la table)
export const dbState = observable<Record<string, any[]>>({});

// Store racine global qui regroupe tous les états de l'application
export const rootState = observable({
  /*   layout: layoutState,
    auth: authState,
    ecommerce: ecommerceState, */
  db: dbState
});

function hasId(row: any): row is { id: string } {
  return typeof row?.id === 'string';
}

// Map globale pour gérer les channels et le refcount par table
const tableChannels: Record<string, { channel: any, refCount: number }> = {};

// Fonction d'abonnement générique pour n'importe quelle table
export function subscribeTableRealtime<T extends TableName>(table: T) {
  console.log(`[LegendState/Supabase Realtime] Subscribing to table: ${table}`); // LOG DEBUG
  // Initialise le tableau si besoin
  if (!dbState[table].peek()) dbState[table].set([]);
  // Chargement initial des données de la table
  selectRows(table).then(({ data }) => {
    if (data) dbState[table].set(data);
  });
  // Gestion du refcount et du channel unique
  if (!tableChannels[table]) {
    // Première souscription : création du channel
    const channel = subscribeToTables({
      tables: [table],
      onInsert: (payload) => {
        dbState[table].set((prev: any[]) => [...prev, payload.new]);
      },
      onUpdate: (payload) => {
        dbState[table].set((prev: any[]) =>
          prev.map((row) =>
            hasId(row) && hasId(payload.new) && row.id === payload.new.id
              ? payload.new
              : row
          )
        );
      },
      onDelete: (payload) => {
        dbState[table].set((prev: any[]) =>
          prev.filter((row) =>
            hasId(row) && hasId(payload.old)
              ? row.id !== payload.old.id
              : true
          )
        );
      },
    });
    tableChannels[table] = { channel, refCount: 1 };
  } else {
    // Déjà souscrit : incrémenter le refcount
    tableChannels[table].refCount++;
  }
  // Fonction de cleanup à retourner
  return () => {
    if (tableChannels[table]) {
      tableChannels[table].refCount--;
      if (tableChannels[table].refCount <= 0) {
        // Cleanup : désabonnement et suppression du channel
        if (tableChannels[table].channel && typeof tableChannels[table].channel.unsubscribe === 'function') {
          tableChannels[table].channel.unsubscribe();
        } else if (typeof tableChannels[table].channel === 'object' && 'supabase' in tableChannels[table].channel) {
          // fallback pour removeChannel si besoin
          tableChannels[table].channel.supabase?.removeChannel(tableChannels[table].channel);
        }
        delete tableChannels[table];
        console.log(`[LegendState/Supabase Realtime] Unsubscribed from table: ${table}`);
      }
    }
  };
}

/**
 * Fonction pour réinitialiser l'état de l'application
 */
export const resetAppState = () => {
  batch(() => {
    // Reset layout state to defaults
    /* layoutState.lang.set('en');
    layoutState.dir.set('ltr');
    layoutState.dataThemeMode.set('light');
    layoutState.dataMenuStyles.set('dark');
    layoutState.dataNavLayout.set('horizontal');
    layoutState.dataHeaderStyles.set('light');
    layoutState.dataVerticalStyle.set('overlay');
    layoutState.dataToggled.set('');
    layoutState.dataNavStyle.set('');
    layoutState.horStyle.set('');
    layoutState.dataPageStyle.set('regular');
    layoutState.dataWidth.set('fullwidth');
    layoutState.dataMenuPosition.set('fixed');
    layoutState.dataHeaderPosition.set('fixed');

    // Reset ecommerce state
    ecommerceState.cart.set([]);
    ecommerceState.wishlist.set([]); */
  });
};

// Types d'exportation pour faciliter l'utilisation avec TypeScript
export type RootState = typeof rootState;
