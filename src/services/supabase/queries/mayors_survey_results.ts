import { ISurveyResult } from "@/interfaces/survey_results";
import { supabase } from "../config";

export async function getMayorsSurveyResults() {
  const { data: mayors_survey_results, error } = await supabase
    .from('mayors_survey_results')
    .select();

  if (error) throw error;

  return mayors_survey_results[0] as ISurveyResult;
}

export async function increment() {
  await supabase.rpc('increment_mayors_results', { row_id: 1 });
}

export async function decrement() {
  await supabase.rpc('decrement_mayors_results', { row_id: 1 });
}

export const updateMayorsSurveyResults = {
  increment,
  decrement,
}
