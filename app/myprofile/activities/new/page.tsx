"use client";

import UserProvider from "@/app/providers/user-provider";
import AppbarContainer from "@/app/containers/appbar-container";
import MainContentContainer from "@/app/containers/main-content-container";
import CreateForm from "./create-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function Page() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <UserProvider
        appbarChildren={<AppbarContainer />}
        mainChildren={
          <MainContentContainer>
            <CreateForm />
          </MainContentContainer>
        }
      />
    </LocalizationProvider>
  );
}
