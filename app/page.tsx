"use client";
import { userAccessToken } from "../utils/fetchUserDetails";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, []);

  return (
    <>
      <div className="db center pv7 mw5 tc black link dim">hello!</div>
    </>
  );
}
