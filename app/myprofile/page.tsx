"use client";

import Profile from "@/app/myprofile/profile";
import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";

export default function Page() {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <Profile />
        </MainContentContainer>
      }
    />
  );
}
