import { BiLoaderCircle } from "react-icons/bi";

import { ICandidate } from "@/interfaces/candidate";
import { VotedType } from "@/interfaces/user";

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

import { AuthForm } from "../AuthForm";

type CardCandidateProps = {
  isLoading: boolean
  candidate: ICandidate;
  currentVote?: VotedType;
  isAuthenticated: boolean
  handleVote: (newVote: number) => void;
}

export function CardCandidate({ isLoading, candidate, currentVote, isAuthenticated, handleVote }: CardCandidateProps) {
  return (
    <>
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
          <Button variant="outline" disabled={isLoading}>Ver mais</Button>

          {isAuthenticated ? (
            <Button
              disabled={isLoading || currentVote === candidate.id}
              onClick={() => handleVote(candidate.id)}
            >
              {isLoading ? (
                <>
                  <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Votando...
                </>
              ) : (
                currentVote === candidate.id ? "Votado" : "Votar"
              )}
            </Button>
          ) : (
            <AuthForm>
              <Button>Votar</Button>
            </AuthForm>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
