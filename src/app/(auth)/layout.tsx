function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-[450px] bg-slate-100 p-5">{children}</div>
    </div>
  );
}

export default AuthLayout;
