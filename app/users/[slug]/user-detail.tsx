"use client";

import { Stack } from "@mui/material";
import { fetchUser, fetchActivitiesByUser } from "@/app/lib/firebase";
import useSWR from "swr";
import { Progress } from "@/app/components/common/presentations";
import { ProfileDetail } from "@/app/components/features/profile";
import { ActivityList } from "@/app/components/features/activity";

export default function UserDetail({ slug }: { slug: string }) {
  const {
    data: user,
    error: fetchUserError,
    isLoading: isFetchUserLoading,
  } = useSWR(slug, () => {
    return fetchUser(slug);
  });

  const {
    data: activities,
    error: fetchActivitiesError,
    isLoading: isFetchActivitiesLoading,
  } = useSWR(`${slug}.activities`, () => {
    return fetchActivitiesByUser(slug);
  });

  return (
    <Stack spacing={2} margin={8}>
      {isFetchUserLoading && <Progress />}
      {fetchUserError && <>failed fetch myprofile</>}
      {!user && <p>ユーザー情報がありません</p>}
      {user && <ProfileDetail user={user} isEditable={false} />}
      {isFetchActivitiesLoading && <Progress />}
      {fetchActivitiesError && <>failed fetch activities</>}
      {!activities ||
        (activities && activities.length === 0 && <p>活動記録がありません</p>)}
      {activities && <ActivityList activities={activities} />}
    </Stack>
  );
}
