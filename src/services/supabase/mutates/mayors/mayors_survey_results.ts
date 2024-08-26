import { supabase } from "../../config";

class MayorsSurveyResults {
  async incrementTotalVotes() {
    await supabase.rpc('increment_total_votes', { row_id: 1 });
  }

  async incrementTotalNullVotes() {
    await supabase.rpc('increment_total_null_votes', { row_id: 1 });
  }
  async decrementTotalNullVotes() {
    await supabase.rpc('decrement_total_null_votes', { row_id: 1 });
  }

  async incrementTotalNoVotes() {
    await supabase.rpc('increment_total_no_votes', { row_id: 1 });
  }
  async decrementTotalNoVotes() {
    await supabase.rpc('decrement_total_no_votes', { row_id: 1 });
  }
}

export const mayorsSurveyResults = new MayorsSurveyResults();
