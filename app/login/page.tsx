"use client"; // Must be client-side component because firebase-hooks uses useReducer under the hood..
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/initfirebase";
import { useEffect } from "react";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [userInfo, loading, error] = useAuthState(auth);

  const signIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { refreshToken, providerData } = user;
      if (user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        await signOut(auth);
        localStorage.clear();
        throw new Error(
          "Whoops! This user does not have administration access!"
        );
      } else {
        localStorage.setItem("user", JSON.stringify(providerData));
        localStorage.setItem("accessToken", JSON.stringify(refreshToken));
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  useEffect(() => {}, [userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userInfo ? (
        <>
          <h2>hi, {userInfo.displayName}</h2>
          <button onClick={() => logOut()}>Logout</button>
        </>
      ) : (
        <>
          <h2>Not signed in</h2>
          <button onClick={() => signIn()}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}
