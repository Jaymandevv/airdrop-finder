"use client";

import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/apiAuth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function useSignUp() {
  const router = useRouter();
  const { toast } = useToast();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user, "created user...");
      router.replace("/", { scroll: false });
      toast({
        description: "Account successfully created!",
      });
    },
  });

  return { signUp, isLoading };
}

export default useSignUp;
