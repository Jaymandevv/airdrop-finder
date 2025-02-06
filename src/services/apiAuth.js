import supabase from "./supabase";

export async function signUpApi({ email, username, password }) {
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

// While logining I should able to check for the user role
// and use that to render the dashboard

export async function signInAPi({ email, password }) {}

// This will be call immediately after signup and signin
// It takes the current user Id and gives a default role "client"
// Use the role to load the page after then
export async function auth(userId, user_role) {
  const { data, error } = await supabase.from("auth").insert([{ userId, user_role }]);

  if (error) return new Error(error.message);

  return data;
}
