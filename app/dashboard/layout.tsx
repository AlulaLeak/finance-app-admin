import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <SideNav />
      {children}
    </div>
  );
}
