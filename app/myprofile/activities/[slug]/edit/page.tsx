"use client";

import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";
import ActivityEdit from "./activity-edit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <UserProvider
        appbarChildren={<AppbarContainer />}
        mainChildren={
          <MainContentContainer>
            <ActivityEdit activityId={params.slug} />
          </MainContentContainer>
        }
      />
    </LocalizationProvider>
  );
}
