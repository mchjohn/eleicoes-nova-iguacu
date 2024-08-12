import { ICandidate } from "@/interfaces/candidate";

import { calcTotalVotes } from "@/utils/calcTotalVotes";

export function AmountVote({ candidates }: { candidates: ICandidate[] }) {
  const totalVotes = calcTotalVotes(candidates);

  return (
    <p className="font-medium mt-4 text-blue-900 mb-4">{totalVotes} pessoas já votaram.</p>
  );
}
