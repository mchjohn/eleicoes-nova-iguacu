import { useMayorsSurveyResults } from "@/contexts/MayorsSurveyResultsContext";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function AmountVote() {
  const { surveyResult } = useMayorsSurveyResults();

  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>Total de Votos</CardDescription>
        <CardTitle className="text-4xl text-orange-500">{surveyResult.total_votes}</CardTitle>
      </CardHeader>
    </Card>
  );
}
