import useUser from "./useUser";

function UserAvatar() {
  const { user, isLoading, isAuthenticated } = useUser();

  console.log(user, "users");
  return <div>{isAuthenticated ? <p>{user?.user_metadata.username}</p> : <>login</>}</div>;
}

export default UserAvatar;
