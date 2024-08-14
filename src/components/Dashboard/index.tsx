import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const AMOUNT_VOTERS = 5020; // TOTAL DE USUÁRIO CADASTRADO NA APLICAÇÃO

const AMOUNT_VOTES = 5000; // TOTAL DE VOTOS
const PERCENT_AMOUNT_VOTES = (AMOUNT_VOTES / AMOUNT_VOTERS) * 100; // PORCENTAGEM DO TOTAL DE VOTOS

const NULL_VOTES = 100; // TOTAL DE VOTOS NULO
const PERCENT_NULL_VOTES = (NULL_VOTES / AMOUNT_VOTES) * 100; // PORCENTAGEM DO TOTAL DE VOTOS NULO

const AMOUNT_DONT_VOTE = 25; // TOTAL DE USUÁRIOS CADASTRADO QUE NÃO VOTARAM
const PERCENT_AMOUNT_DONT_VOTE = (AMOUNT_DONT_VOTE / AMOUNT_VOTERS) * 100; // TOTAL DE USUÁRIOS CADASTRADO QUE NÃO VOTARAM

const VALID_VOTES = AMOUNT_VOTES - NULL_VOTES; // TOTAL DE VOTOS VÁLIDOS
const PERCENT_VALID_VOTES = (VALID_VOTES / AMOUNT_VOTES) * 100; // PORCENTAGEM DOS VOTOS VÁLIDO

export function Dashboard() {
  return (
    <div className="flex w-full flex-col bg-blue-950 rounded-lg">
      <main className="grid flex-1 items-start p-4 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card x-chunk="dashboard-05-chunk-1">
              <Header title={AMOUNT_VOTERS} description="Total de Participantes" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-1">
              <Header title={AMOUNT_VOTES} content={PERCENT_AMOUNT_VOTES} description="Total de Votos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={VALID_VOTES} content={PERCENT_VALID_VOTES} description="Votos válidos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={NULL_VOTES} content={PERCENT_NULL_VOTES} description="Total de Votos Brancos/Nulos" />
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Header title={AMOUNT_DONT_VOTE} content={PERCENT_AMOUNT_DONT_VOTE} description="Pessoas que não vão votar" />
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

interface HeaderProps {
  title: number;
  content?: number;
  description: string;
}

export function Header({ title, content, description }: HeaderProps) {
  return (
    <>
      <CardHeader className="pb-2">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-4xl text-orange-500">{title}</CardTitle>
      </CardHeader>

      {content && (
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {`${content}`[2] ? content.toFixed(1) : content}%
          </div>
        </CardContent>
      )}
    </>
  )
}
