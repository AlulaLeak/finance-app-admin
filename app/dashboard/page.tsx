"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/initfirebase";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  } else if (user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return <div>Hi, {user?.displayName}. Here's your dashboard.</div>;
  }
}
