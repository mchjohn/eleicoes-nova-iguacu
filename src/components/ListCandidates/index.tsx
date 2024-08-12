import { ICandidate } from "@/interfaces/candidate";

import { CardCandidate } from "@/components/CardCandidate";

export function ListCandidates({ candidates }: { candidates: ICandidate[] }) {
  return (
    <div className="space-y-2 md:flex md:flex-wrap gap-4">
      {candidates?.map((candidate) => (
        <CardCandidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
