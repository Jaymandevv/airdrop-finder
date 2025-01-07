import Header from "@/features/Header/Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
