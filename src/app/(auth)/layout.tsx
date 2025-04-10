import Link from "next/link";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen">
      <header className="bg-slate-100 h-20  flex items-center">
        <div className="w-[1200px] mx-auto flex justify-between">
          <h1 className="font-bold text-2xl">Airdrop finder</h1>
          <Link href="">FAQ</Link>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-[450px] bg-slate-100 p-5">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
