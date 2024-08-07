import { ICandidate } from "@/interfaces/candidate";

import { CardPrefeito } from "@/components/CardPrefeito";

export function ListCandidates({ candidates }: { candidates: ICandidate[] }) {
  return (
    <div className="space-y-2 md:flex md:flex-wrap gap-4">
      {candidates?.map((candidate) => (
        <CardPrefeito key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
