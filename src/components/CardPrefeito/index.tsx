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

type CardPrefeitoProps = {
  candidate: ICandidate;
}

export function CardPrefeito({ candidate }: CardPrefeitoProps) {
  return (
    <Card>
      <CardHeader className="items-center">
        <Avatar className="rounded-sm size-40">
          <AvatarImage src={candidate?.picture} />
          <AvatarFallback>{candidate?.name}</AvatarFallback>
        </Avatar>

        <CardTitle>{candidate?.name}</CardTitle>
        <CardDescription className="text-zinc-700">Partido <span className="font-semibold">{candidate?.political_party.name}</span></CardDescription>
      </CardHeader>

      <CardContent className="items-center text-center">
        <p>{candidate?.about}</p>
      </CardContent>

      <CardFooter className="flex gap-4 justify-center">
      <Button variant="outline">Ver mais</Button>
      <Button>Votar</Button>
      </CardFooter>
    </Card>

  )
}
