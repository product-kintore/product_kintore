"use client";

import { Stack } from "@mui/material";
import { fetchUser } from "@/app/lib/firebase";
import useSWR from "swr";
import Progress from "@/app/components/progress";
import ProfileContainer from "@/app/containers/profile-container";
import ActivityContainer from "@/app/containers/activity-container";

export default function MemeberDetail({ slug }: { slug: string }) {
  const { data, error, isLoading } = useSWR(slug, () => {
    return fetchUser(slug);
  });

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch myprofile</>;

  return data && (
    <Stack spacing={2} margin={8}>
      <ProfileContainer user={data} isEditable={false} />
      <ActivityContainer />
    </Stack>
  );
}
