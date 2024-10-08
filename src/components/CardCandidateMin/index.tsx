import { ICandidate } from "@/interfaces/candidate";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CardCandidateMinProps = {
  candidate: ICandidate;
}

export function CardCandidateMin({ candidate }: CardCandidateMinProps) {
  return (
    <div className="p-3 text-stone-900 border rounded-md w-full md:w-96">
      <div className="flex flex-row gap-2">
        <Avatar className="rounded-sm size-24">
          <AvatarImage src={candidate?.picture} />
          <AvatarFallback>{candidate?.name}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-xl font-medium">{candidate?.name}</p>
          <p className="text-zinc-700 text-base">Partido <span className="font-semibold">{candidate?.political_party}</span></p>
          <p className="text-zinc-700 text-base"><span className="font-semibold">{candidate?.amount_votes}</span> votos</p>
        </div>
      </div>
    </div>

  )
}
