interface AuthHeaderProps {
  text: string;
}

function AuthHeader({ text }: AuthHeaderProps) {
  return <h2 className="text-2xl font-bold uppercase">{text}</h2>;
}

export default AuthHeader;
