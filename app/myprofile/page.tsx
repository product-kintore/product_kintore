"use client";

import Myprofile from "@/app/myprofile/myprofile";
import UserProvider from "@/app/providers/user-provider";
import AppbarContainer from "@/app/containers/appbar-container";
import MainContentContainer from "@/app/containers/main-content-container";

export default function Page() {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <Myprofile />
        </MainContentContainer>
      }
    />
  );
}
