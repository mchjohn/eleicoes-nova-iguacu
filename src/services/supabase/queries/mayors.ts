import { ICandidate } from "@/interfaces/candidate";
import { supabase } from "../config";

export async function getMayors() {
  const { data: mayors, error } = await supabase.from('mayors').select();

  if (error) throw error;

  return mayors as ICandidate[];
}
