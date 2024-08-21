import { BiLoaderCircle } from "react-icons/bi";

import { ICandidate } from "@/interfaces/candidate";
import { useUpdateMayorVote } from "@/mutations/useUpdateMayorVote";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardCandidateProps = {
  candidate: ICandidate;
}

export function CardCandidate({ candidate }: CardCandidateProps) {
  const { mutateAsync, isPending } = useUpdateMayorVote();

  return (
    <Card className="text-stone-900 md:w-96 md:h-[722px]">
      <CardHeader className="items-center">
        <Avatar className="rounded-sm size-48">
          <AvatarImage src={candidate?.picture} />
          <AvatarFallback>{candidate?.name}</AvatarFallback>
        </Avatar>

        <CardTitle>{candidate?.name}</CardTitle>
        <CardDescription className="text-zinc-700">
            Partido <span className="font-semibold">
              {candidate?.political_party}
            </span>

            <br />

            Votos <span className="font-semibold">
              {candidate?.amount_votes}
            </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="items-center text-justify p-2">
        <p className="max-h-64 overflow-auto md:max-h-fit md:h-[340px]">{candidate?.about}</p>
      </CardContent>

      <CardFooter className="flex gap-4 justify-center md:mt-auto">
        <Button variant="outline" disabled={isPending}>Ver mais</Button>
        <Button
          disabled={isPending}
          onClick={() => mutateAsync(candidate.id)}
        >
          {isPending ? (
            <>
              <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Votando...
            </>
          ) : (
            "Votar"
          )}
        </Button>
      </CardFooter>
    </Card>

  )
}
