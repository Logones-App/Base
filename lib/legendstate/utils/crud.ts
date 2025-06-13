import { supabase } from "@/lib/supabase/supabaseClient";
import type { TableName, TableRow, TableInsert, TableUpdate } from '@/lib/supabase/table-types';

// SELECT rows
export async function selectRows<T extends TableName>(table: T) {
  return await supabase.from(table).select("*");
}

// INSERT row
export async function insertRow<T extends TableName>(table: T, row: TableInsert<T>) {
  // TypeScript workaround: cast row to any to satisfy Supabase's overloaded .insert()
  return await supabase.from(table).insert([row as any]);
}

// UPDATE row by id
export async function updateRow<T extends TableName>(table: T, id: string, row: TableUpdate<T>) {
  return await supabase.from(table).update(row as any).eq('id', id as any);
}

// DELETE row by id
export async function deleteRow<T extends TableName>(table: T, id: string) {
  return await supabase.from(table).delete().eq('id', id as any);
}
