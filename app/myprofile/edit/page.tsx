"use client";

import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";
import ProfileEdit from "@/app/myprofile/edit/profile-edit";

export default function Page() {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <ProfileEdit />
        </MainContentContainer>
      }
    />
  );
}
