import { ICandidate } from "@/interfaces/candidate";

import { calcTotalVotes } from "@/utils/calcTotalVotes";

export function AmountVote({ candidates }: { candidates: ICandidate[] }) {
  const totalVotes = calcTotalVotes(candidates);

  return (
    <p className="font-medium text-blue-900">{totalVotes} pessoas já votaram.</p>
  );
}
