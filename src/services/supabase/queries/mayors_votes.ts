import { supabase } from "../config";

export async function updateMayorVote(id: number) {
  await supabase.rpc('increment', { row_id: id });
}
