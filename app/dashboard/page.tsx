"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/initfirebase";
import { localUser } from "../../utils/fetchUserDetails";

export default function Dashboard() {
  const user = localUser();

  return (
    <>
      <article className="center mw5 mw6-ns mv7 hidden ba mv4">
        <h1 className="f4 bg-near-black white mv0 pv2 ph3"> Welcome back, {user.displayName}!</h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">
            Click on any of the options in the Navigation bar above to get started.
          </p>
        </div>
      </article>
    </>
  );
}
