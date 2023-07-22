"use client";

import UserProvider from "@/app/providers/user-provider";
import AppbarContainer from "@/app/containers/appbar-container";
import MainContentContainer from "@/app/containers/main-content-container";
import MemeberProfile from "./member-profile";

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <MemeberProfile slug={params.slug} />
        </MainContentContainer>
      }
    />
  );
}
