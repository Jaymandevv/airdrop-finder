import supabase from "./supabase";

export async function signUpApi({ email, username, password }) {
  const role = email === "garbajamiu2000@gmail.com" ? "admin" : "client";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        role,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signInAPi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logoutApi() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
