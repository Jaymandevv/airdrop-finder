import { getCurrentUser } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.user_metadata?.role === "admin",
  };
}

export default useUser;
