"use client";
import { userAccessToken } from "../utils/fetchUserDetails";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      router.push("/login");
    }
  }, []);
  return <div>hello, next!</div>;
}
