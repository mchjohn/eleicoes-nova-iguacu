import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { BiLoaderCircle } from "react-icons/bi"

import {
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { SignUpData, signUpUserSchema } from "@/validations/signUpUserSchema"

import { useAuth } from "@/contexts/AuthContext"

type Props = {
  setSignIn: () => void;
}

export function SignUp({ setSignIn }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpUserSchema),
  });

  const { loadings, handleSignUp } = useAuth();

  const onSubmit: SubmitHandler<SignUpData> = (data) => handleSignUp(data);

  return (
    <form className="grid gap-4 py-4 text-zinc-800" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name" className="text-right">
          Nome*
        </Label>
        <Input id="name" type="text" placeholder="João da Silva" className="col-span-3" {...register("name")} />
        <span className="text-red-600 text-xs">{errors.name?.message}</span>
      </div>

      <div>
        <Label htmlFor="email" className="text-right">
          E-mail*
        </Label>
        <Input id="email" type="email" placeholder="seuemail@exemplo.com" className="col-span-3" {...register("email")} />
        <span className="text-red-600 text-xs">{errors.email?.message}</span>
      </div>

      <div>
        <Label htmlFor="phone" className="text-right">
          WhatsApp*
        </Label>
        <Input id="phone" type="tel" placeholder="21999999999" className="col-span-3" {...register("phone")} />
        <span className="text-red-600 text-xs">{errors.phone?.message}</span>
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
          <Button type="submit" disabled={loadings.isPendingSignUp}>
            {
              loadings.isPendingSignUp ?
                <>
                  <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Cadastrando
                </> :
                "Cadastrar"
            }
          </Button>

          <Button variant="link" className="mt-6" disabled={loadings.isPendingSignUp} onClick={setSignIn}>
            Entrar com minha conta
          </Button>
        </div>
      </DialogFooter>
    </form>
  )
}
