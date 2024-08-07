import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardPrefeito() {
  return (
    <Card>
      <CardHeader className="items-center">
        <Avatar className="rounded-sm size-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <CardTitle>José da Silva</CardTitle>
        <CardDescription className="text-zinc-700">Partido <span className="font-semibold">PSOL</span></CardDescription>
      </CardHeader>

      <CardContent className="items-center text-center">
        <p>Card Content</p>
      </CardContent>

      <CardFooter className="flex gap-4 justify-center">
      <Button variant="outline">Ver mais</Button>
      <Button>Votar</Button>
      </CardFooter>
    </Card>

  )
}