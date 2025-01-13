import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ email, username, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
