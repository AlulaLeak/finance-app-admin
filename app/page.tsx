"use client";
import { userAccessToken } from "../utils/fetchUserDetails";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
