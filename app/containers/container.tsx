"use client";

import { CssBaseline, Paper, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  User,
} from "firebase/auth";
import AuthenticatedAppbar from "@/app/components/authenticated-appbar";
import Appbar from "@/app/components/appbar";
import Signin from "@/app/signin";
import { useRouter } from "next/navigation";
import { Group, Book, AccountBox } from "@mui/icons-material";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJET_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const drawerLinkList = [
  {
    text: "自己紹介一覧",
    icon: <Group />,
    // TODO: fixed href
    href: "/members",
  },
  {
    text: "活動記録",
    icon: <Book />,
    // TODO: fixed href
    href: "/myprofile",
  },
  {
    text: "マイプロフィール",
    icon: <AccountBox />,
    href: "/myprofile",
  },
];

export default function Container({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authCompleted, setAuthCompleted] = useState(false);

  useEffect(() => {
    (async () => {
      const queryPrams = new URLSearchParams(window.location.search);
      const token = queryPrams.get("t");
      const auth = getAuth();

      if (token) {
        window.history.replaceState(
          undefined,
          window.document.title,
          window.location.href.replace(window.location.search, ""),
        );
        await signInWithCustomToken(auth, token);
      }

      onAuthStateChanged(auth, (user) => {
        setAuthCompleted(true);
        setUser(user);
      });
    })();
  });

  if (!authCompleted) {
    return (
      <Paper
        elevation={0}
        sx={{ textAlign: "center", marginTop: (theme) => theme.spacing(8) }}
      >
        <CircularProgress />
      </Paper>
    );
  }

  const ToolBarDiv = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

  const handleDrawerMenuClick = (href: string) => {
    router.push(href);
  };

  return (
    <div style={{ display: "block" }}>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        {user ? (
          <AuthenticatedAppbar
            linkList={drawerLinkList}
            handleClick={(href) => handleDrawerMenuClick(href)}
          />
        ) : (
          <Appbar />
        )}
      </div>
      <main>
        <ToolBarDiv />
        <div>{user ? children : <Signin />}</div>
      </main>
    </div>
  );
}
