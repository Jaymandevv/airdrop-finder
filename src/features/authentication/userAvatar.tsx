import { Loader, LogOut, UserIcon } from "lucide-react";
import useUser from "./useUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import useLogout from "./useLogout";

function UserAvatar() {
  const { user, isLoading, isAuthenticated } = useUser();
  const { logout, isLoading: isLoadingLogout } = useLogout();

  console.log(user, "users");
  return (
    <div>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback className="uppercase">{user?.user_metadata.username.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex gap-1 items-center">
              <UserIcon className="" />
              <p>{user?.user_metadata.username}</p>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-1 items-center" onClick={() => logout()} disabled={isLoadingLogout}>
              {isLoadingLogout ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  <LogOut />
                  <p>Logout</p>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-3">
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default UserAvatar;
