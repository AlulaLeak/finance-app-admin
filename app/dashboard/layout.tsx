"use client";
import SideNav from "../../components/SideNav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/initfirebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (user) {
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
