"use client";

import { useMutation } from "@tanstack/react-query";
import { auth, signUpApi } from "../../services/apiAuth";
import { useToast } from "@/hooks/use-toast";

function useSignUp() {
  const { toast } = useToast();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user, "created user...");
      const role = user.user.email === "garbajamiu2000@gmail.com" ? "admin" : "client";

      auth(user.user.id, role);
      toast({
        description: "Account successfully created!",
      });
    },
  });

  return { signUp, isLoading };
}

export default useSignUp;
