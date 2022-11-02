"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../../firebase/initfirebase";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  // const firebaseAuth = getAuth(firebaseApp);
  // const provider = new GoogleAuthProvider();
  // const router = useRouter();
  // const signIn = async () => {
  //   const { user } = await signInWithPopup(firebaseAuth, provider);
  //   const { refreshToken, providerData } = user;
  //   localStorage.setItem("user", JSON.stringify(providerData));
  //   localStorage.setItem("accessToken", JSON.stringify(refreshToken));
  //   router.push("/dashboard");
  // };

  return (
    <div>
      <button onClick={() => signIn()}>Sign in with Google</button>
    </div>
  );
};
export default Login;
