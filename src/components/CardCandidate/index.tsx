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
import { ICandidate } from "@/interfaces/candidate";

type CardCandidateProps = {
  candidate: ICandidate;
}

export function CardCandidate({ candidate }: CardCandidateProps) {
  return (
    <Card className="text-stone-900 md:w-96 md:h-[722px]">
      <CardHeader className="items-center">
        <Avatar className="rounded-sm size-48">
          <AvatarImage src={candidate?.picture} />
          <AvatarFallback>{candidate?.name}</AvatarFallback>
        </Avatar>

        <CardTitle>{candidate?.name}</CardTitle>
        <CardDescription className="text-zinc-700">Partido <span className="font-semibold">{candidate?.political_party.name}</span></CardDescription>
      </CardHeader>

      <CardContent className="items-center text-justify p-2">
        <p className="max-h-64 overflow-auto md:max-h-fit md:h-[340px]">{candidate?.about}</p>
      </CardContent>

      <CardFooter className="flex gap-4 justify-center md:mt-auto">
      <Button variant="outline">Ver mais</Button>
      <Button>Votar</Button>
      </CardFooter>
    </Card>

  )
}
