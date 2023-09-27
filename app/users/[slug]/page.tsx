"use client";

import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";
import MemeberDetail from "./user-detail";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <MemeberDetail slug={params.slug} />
        </MainContentContainer>
      }
    />
  );
}
