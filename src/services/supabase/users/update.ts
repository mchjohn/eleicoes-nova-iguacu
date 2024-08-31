
import { supabase } from "../config";

import { VotedType } from "@/interfaces/user";

class UpdateUser {
  async updateCurrentVote(vote: VotedType) {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        current_vote: vote,
      }
    });

    if (error) throw error;

    return data;
  }
}

export const updateUser = new UpdateUser();
