import { ReactNode, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

type Props = {
  children: ReactNode;
}

export function AuthForm({ children }: Props) {
  const [type, setType] = useState<'signin' | 'signup'>('signup');

  const isSignIn = type === 'signin';

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-zinc-900">{isSignIn ? 'Entre' : 'Cadastre-se'} para votar</DialogTitle>

          <DialogDescription>
            Preencha os campos abaixo para {isSignIn ? 'entrar com' : 'criar'} sua conta.
          </DialogDescription>
        </DialogHeader>

        {isSignIn && <SignIn setSignUp={() => setType('signup')} />}
        {!isSignIn && <SignUp setSignIn={() => setType('signin')} />}
      </DialogContent>
    </Dialog>
  )
}
