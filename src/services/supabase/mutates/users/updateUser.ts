import { supabase } from "../../config";

import { VotedType } from "@/interfaces/user";

export async function updateCurrentVote(vote: VotedType, userId: number) {
  await supabase
  .from('users')
  .update({ current_vote: vote })
  .eq('id', userId);
}
