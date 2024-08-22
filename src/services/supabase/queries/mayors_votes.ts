import { supabase } from "../config";
import { updateMayorsSurveyResults } from "./mayors_survey_results";

export async function updateMayorVote(id: number, oldId?: number) {
  if (oldId) {
    decrementMayorVote(oldId)
    updateMayorsSurveyResults.decrement();
  }

  await supabase.rpc('increment', { row_id: id });
  await updateMayorsSurveyResults.increment();
}

async function decrementMayorVote(oldId: number) {
  await supabase.rpc('decrement', { row_id: oldId });
}
