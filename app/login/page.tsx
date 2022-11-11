"use client";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/initfirebase";
import { useEffect } from "react";
import { localUser, userAccessToken } from "../../utils/fetchUserDetails";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const accessToken = userAccessToken();
  const [userInfo, loading, error] = useAuthState(auth);

  const signIn = async () => {
    const { user } = await signInWithPopup(auth, provider);
    try {
      if (user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        await signOut(auth);
        localStorage.clear();
        throw new Error("Whoops! This user does not have administration access!");
      } else {
        const { refreshToken, providerData } = user;
        localStorage.setItem("user", JSON.stringify(providerData));
        localStorage.setItem("accessToken", JSON.stringify(refreshToken));
      }
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    signOut(auth);
    localStorage.clear();
  };

  useEffect(() => {}, [userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {accessToken ? (
        <>
          <h2>Hi, {localUser()?.displayName}!</h2>
          <button onClick={() => logOut()}>Logout</button>
        </>
      ) : (
        <>
          <h2>Not signed in</h2>
          <button onClick={() => signIn().then(() => router.push("/dashboard"))}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}
