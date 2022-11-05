"use client";
import SideNav from "../../components/SideNav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/initfirebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { localUser } from "../../utils/fetchUserDetails";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfo, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    localUser()?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      router.push("/login");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (localUser()?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <div>
        <SideNav />
        {children}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
