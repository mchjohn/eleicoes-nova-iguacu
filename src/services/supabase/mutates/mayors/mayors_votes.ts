import { supabase } from "../../config";

class Mayors {
  async incrementAmountVotes(mayorId: number) {
    await supabase.rpc('increment_amount_votes', { row_id: mayorId });
  }

  async decrementAmountVotes(mayorId: number) {
    await supabase.rpc('decrement_amount_votes', { row_id: mayorId });
  }
}

export const mayors = new Mayors();
