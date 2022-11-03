"use client"; // Must be client-side component because firebase-hooks uses useReducer under the hood..
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/initfirebase";
export default function Login() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const signIn = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/dashboard");
  };
  const logOut = async () => {
    await signOut(auth);
    localStorage.clear();
  };
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => signIn()}>Sign in with Google</button>
      {user ? (
        <div>
          <h2>hi, {user.displayName}</h2>
          <button onClick={() => logOut()}>Logout</button>
        </div>
      ) : (
        <h2>Not signed in</h2>
      )}
    </div>
  );
}
