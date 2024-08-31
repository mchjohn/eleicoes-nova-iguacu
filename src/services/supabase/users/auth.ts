import { supabase } from "../config";

import { IUser } from "@/interfaces/user";
import { SignInData } from "@/validations/signInSchema";
import { SignUpData } from "@/validations/signUpUserSchema";

class Auth {
  async signIn(params: SignInData) {
    const { email, password } = params;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error;

    return data.user;
  }

  async signUp(params: SignUpData) {
    const { email, name, phone, password } = params;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
          current_vote: ''
        },
      },
    })

    if (error) throw error;

    return data.user;
  }

  async signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) throw error;
  }

  async userData() {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const userData: IUser = {
      id: user.id,
      name: user.user_metadata.name,
      email: user.user_metadata.email,
      phone: user.user_metadata.phone,
      current_vote: user.user_metadata.current_vote,
    }

    return userData;
  }
}

export const auth = new Auth();
