import { ICandidate } from "@/interfaces/candidate";

import { calcTotalVotes } from "@/utils/calcTotalVotes";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function AmountVote({ candidates }: { candidates: ICandidate[] }) {
  const totalVotes = calcTotalVotes(candidates);

  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>Total de Votos</CardDescription>
        <CardTitle className="text-4xl text-orange-500">{totalVotes}</CardTitle>
      </CardHeader>
    </Card>
  );
}
