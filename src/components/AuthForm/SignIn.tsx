import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { BiLoaderCircle } from "react-icons/bi"

import {
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { SignInData, signInSchema } from "@/validations/signInSchema"

import { useAuth } from "@/contexts/AuthContext"

type Props = {
  setSignUp: () => void;
}

export function SignIn({ setSignUp }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const { loadings, handleSignIn } = useAuth();

  const onSubmit: SubmitHandler<SignInData> = (data) => handleSignIn(data);

  return (
    <form className="grid gap-4 py-4 text-zinc-800" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email" className="text-right">
          E-mail*
        </Label>
        <Input id="email" type="email" placeholder="seuemail@exemplo.com" className="col-span-3" {...register("email")} />
        <span className="text-red-600 text-xs">{errors.email?.message}</span>
      </div>

      <div>
        <Label htmlFor="password" className="text-right">
          Senha*
        </Label>
        <Input id="password" type="password" placeholder="Digite sua senha" className="col-span-3" {...register("password")} />
        <span className="text-red-600 text-xs">{errors.password?.message}</span>
      </div>

      <DialogFooter>
        <div className="flex flex-col flex-1">
          <Button type="submit">
            {
              loadings.isPendingSignIn ?
                <>
                  <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Entrando
                </> :
                "Entrar"
            }
          </Button>

          <Button variant="link" className="mt-6" disabled={loadings.isPendingSignIn} onClick={setSignUp}>
            Criar uma conta
          </Button>
        </div>
      </DialogFooter>
    </form>
  )
}
