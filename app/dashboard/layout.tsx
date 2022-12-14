"use client";
import { useRouter } from "next/navigation";
import TopNav from "../../components/TopNav";
import { userAccessToken } from "../../utils/fetchUserDetails";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const accessToken = userAccessToken();

  if (accessToken) {
    return (
      <>
        <TopNav />
        {children}
      </>
    );
  } else {
    router.push("/login");
  }
}
