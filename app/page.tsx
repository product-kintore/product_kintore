"use client";

import Top from "./top";
import UserProvider from "@/app/providers/user-provider";
import ThemeProvider from "@/app/providers/theme-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";

export default function Page() {
  return (
    <ThemeProvider>
      <UserProvider
        appbarChildren={<AppbarContainer />}
        mainChildren={
          <MainContentContainer>
            <Top />
          </MainContentContainer>
        }
      />
    </ThemeProvider>
  );
}
