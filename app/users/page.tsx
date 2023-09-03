"use client";

import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";
import MemberList from "./user-list";

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
