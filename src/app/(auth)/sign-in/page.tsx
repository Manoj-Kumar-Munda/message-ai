"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className="mx-2">
        Not signed in <br />
        <button className="bg-orange-600 px-2 py-1" onClick={() => signIn()}>
          Sign in
        </button>
      </div>
    </>
  );
}
