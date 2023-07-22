"use client";

import { styled } from "@mui/material/styles";
import { useContext } from "react";

import Signin from "@/app/signin";
import { UserContext } from "@/app/contexts/user-context";

export default function MainContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const userContext = useContext(UserContext);
  const ToolBarDiv = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

  return (
    <main>
      <ToolBarDiv />
      <div>{userContext?.user ? children : <Signin />}</div>
    </main>
  );
}
