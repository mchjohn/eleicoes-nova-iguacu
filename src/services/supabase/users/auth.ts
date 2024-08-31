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

  async stateChange() {
    console.log('State change is called');

    const { data } = supabase.auth.onAuthStateChange((event) => {
      console.log('State change is called 2');

      if (event === 'SIGNED_IN') {
        console.log('User is signed in');
      } else if (event === 'SIGNED_OUT') {
        console.log('User is signed out');
      } else if (event === 'USER_UPDATED') {
        console.log('User is updated');
      }
    });

    // call unsubscribe to remove the callback
    data.subscription.unsubscribe();
  }

  async userData() {
    const { data: { user } } = await supabase.auth.getUser();

    const userData: IUser = {
      id: user?.id,
      name: user?.user_metadata.name,
      email: user?.user_metadata.email,
      phone: user?.user_metadata.phone,
      current_vote: user?.user_metadata.current_vote,
    }

    return userData;
  }
}

export const auth = new Auth();
