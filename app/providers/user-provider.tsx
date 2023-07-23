"use client";

import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  User,
} from "firebase/auth";
import { initialiFirebaseApp, upsertUserWhenSignin } from "@/app/lib/firebase";
import { UserContext } from "@/app/contexts/user-context";
import Progress from "@/app/components/progress";

initialiFirebaseApp();

export default function UserProvider({
  appbarChildren,
  mainChildren,
}: {
  appbarChildren: React.ReactNode;
  mainChildren: React.ReactNode;
}) {
  const [authCompleted, setAuthCompleted] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const queryPrams = new URLSearchParams(window.location.search);
      const token = queryPrams.get("t");
      const name = queryPrams.get("n") || "";
      const email = queryPrams.get("e") || "";
      const photoUrl = queryPrams.get("p") || "";
      const uid = queryPrams.get("u") || "";
      const auth = getAuth();

      if (token) {
        window.history.replaceState(
          undefined,
          window.document.title,
          window.location.href.replace(window.location.search, ""),
        );
        await signInWithCustomToken(auth, token);
        await upsertUserWhenSignin(uid, { id: uid, name, email, photoUrl });
      }

      onAuthStateChanged(auth, (user) => {
        setAuthCompleted(true);
        setUser(user);
      });
    })();
  });

  if (!authCompleted) {
    return <Progress />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ display: "block" }}>
        <CssBaseline />
        {appbarChildren}
        {mainChildren}
      </div>
    </UserContext.Provider>
  );
}
