import { useToast } from "@/hooks/use-toast";
import { signInAPi } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function useLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: signInAPi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      router.replace("/", { scroll: false });
      toast({
        description: "Login successful!",
      });
    },
  });

  return { login, isLoading };
}

export default useLogin;
