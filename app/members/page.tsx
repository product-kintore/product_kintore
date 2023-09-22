"use client";

import UserProvider from "@/app/providers/user-provider";
import AppbarContainer from "@/app/containers/appbar-container";
import MainContentContainer from "@/app/containers/main-content-container";
import MemberList from "./member-list";

export default function Page() {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <MemberList />
        </MainContentContainer>
      }
    />
  );
}
