"use client";

import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Box, Container } from "@mui/material";

import Signin from "@/app/signin";
import { UserContext } from "@/app/contexts/user-context";

const ToolBarDiv = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const MainContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
}));

interface MainContentContainerProps {
  children: React.ReactNode;
}

export default function MainContentContainer({
  children,
}: MainContentContainerProps) {
  const userContext = useContext(UserContext);

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <ToolBarDiv />
      {userContext?.user ? (
        <MainContainer maxWidth="xl">
          {children}
        </MainContainer>
      ) : (
        <Signin />
      )}
    </Box>
  );
}
