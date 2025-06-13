import type { Database } from "./database.types";

export type TableName = keyof Database["public"]["Tables"];
export type TableRow<T extends TableName> = Database["public"]["Tables"][T]["Row"];

// Types utilitaires pour les opérations CRUD
export type TableInsert<T extends TableName> = Database["public"]["Tables"][T]["Insert"];
export type TableUpdate<T extends TableName> = Database["public"]["Tables"][T]["Update"];
export type TableDelete<T extends TableName> = { id: string };

// Type utilitaire : garantit la présence d'un champ 'id' (uuid) sur chaque ligne d'une table
export type RowWithId<T extends TableName> = TableRow<T> & { id: string };
