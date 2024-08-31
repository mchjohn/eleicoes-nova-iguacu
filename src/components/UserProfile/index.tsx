import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useAuth } from "@/contexts/AuthContext";

export function UserProfile() {
  const [open, setOpen] = useState(false);

  const { user, loadings, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <p>{user?.name}</p>
          <p className="text-xs text-zinc-600">{user?.email}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-zinc-900">
            Nooo! Quer realmente sair da sua conta?
          </DialogTitle>

          <DialogDescription>
            Você não poderá votar ou trocar seu voto sem estar autenticado
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" size="sm" disabled={loadings.isPendingSignOut}>
              Cancelar
            </Button>
          </DialogClose>

          <Button type="button" variant="outline" size="sm" disabled={loadings.isPendingSignOut} onClick={handleSignOut}>
            {
              loadings.isPendingSignOut ?
                <>
                  <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Saindo
                </> :
                "Sair"
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
