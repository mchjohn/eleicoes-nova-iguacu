import { useMayorsSurveyResults } from "@/contexts/MayorsSurveyResultsContext";

import { Card } from "@/components/ui/card";
import { Header } from "./Header";

export function Dashboard() {
  const { surveyResult } = useMayorsSurveyResults();
  const {
    total_votes,
    total_voters,
    total_no_votes,
    total_null_votes,
    total_valid_votes,
    percent_total_votes,
    percent_total_no_votes,
    percent_total_null_votes,
    percent_total_valid_votes,
  } = surveyResult;

  return (
    <div className="flex w-full flex-col bg-blue-950 rounded-lg">
      <main className="grid flex-1 items-start p-4 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card x-chunk="dashboard-05-chunk-1">
              <Header title={total_voters ?? 0} description="Total de Participantes" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-1">
              <Header title={total_votes} content={percent_total_votes} description="Total de Votos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={total_valid_votes} content={percent_total_valid_votes} description="Votos válidos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={total_null_votes} content={percent_total_null_votes} description="Total de Votos Brancos/Nulos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={total_no_votes} content={percent_total_no_votes} description="Pessoas que não vão votar" />
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
