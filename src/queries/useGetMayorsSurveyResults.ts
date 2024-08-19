import { useQuery } from '@tanstack/react-query';

import { MAYORS_SURVEY_RESULTS } from '@/constants/queryKeys';
import { getMayorsSurveyResults } from '@/services/supabase/queries/mayors_survey_results';

export function useGetMayorsSurveyResults() {
  const query = useQuery({
    queryKey: [MAYORS_SURVEY_RESULTS],
    queryFn: () => getMayorsSurveyResults(),
  });

  return query;
}
