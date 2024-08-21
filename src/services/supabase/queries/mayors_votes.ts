import { supabase } from "../config";

export async function updateMayorVote(id: number, oldId?: number) {
  if (oldId) {
    await supabase.rpc('decrement', { row_id: oldId });
  }

  await supabase.rpc('increment', { row_id: id });
}
