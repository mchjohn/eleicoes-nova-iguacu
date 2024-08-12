import { ICandidate } from "@/interfaces/candidate";

export function calcTotalVotes(candidates?: ICandidate[]) {
  if (candidates && candidates.length === 0) return 0;

  const totalVotes = candidates?.reduce((acc, { votes }) => {
    return acc + votes
  }, 0);

  return totalVotes;
}
