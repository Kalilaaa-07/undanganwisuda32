import BottomNav from "@/components/BottonNav";

export default function UndanganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">

      {/* CONTENT */}
      {children}

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}