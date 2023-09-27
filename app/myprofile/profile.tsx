"use client";

import { Stack } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/user-context";
import { fetchUser, fetchActivitiesByUser } from "@/app/lib/firebase";
import useSWR from "swr";
import { Progress } from "@/app/components/common/presentations";
import { useRouter } from "next/navigation";
import { ProfileDetail } from "@/app/components/features/profile";
import { ActivityList } from "@/app/components/features/activity";

export default function Profile() {
  const userContext = useContext(UserContext);
  const uid = userContext?.user?.uid || "";
  const router = useRouter();

  const handleProfileEditButtonClick = () => {
    router.push(`/myprofile/edit`);
  };

  const handleCreateActivity = () => {
    router.push(`/myprofile/activities/new`);
  };

  const handleUpdateActivity = (id: string) => {
    router.push(`/myprofile/activities/${id}/edit`);
  };

  const {
    data: user,
    error: fetchUserError,
    isLoading: isFetchUserLoading,
  } = useSWR(uid, () => {
    return fetchUser(uid);
  });

  const {
    data: activities,
    error: fetchActivitiesError,
    isLoading: isFetchActivitiesLoading,
  } = useSWR(`${uid}.activities`, () => {
    return fetchActivitiesByUser(uid);
  });

  return (
    <Stack spacing={2} margin={8}>
      {isFetchUserLoading && <Progress />}
      {fetchUserError && <>failed fetch myprofile</>}
      {!user && <p>ユーザー情報がありません</p>}
      {user && (
        <ProfileDetail
          user={user}
          isEditable={true}
          handleClick={handleProfileEditButtonClick}
        />
      )}
      {isFetchActivitiesLoading && <Progress />}
      {fetchActivitiesError && <>failed fetch activities</>}
      {!activities ||
        (activities && activities.length === 0 && <p>活動記録がありません</p>)}
      {activities && (
        <ActivityList
          activities={activities}
          handleCreateActivity={handleCreateActivity}
          handleUpdateActivity={handleUpdateActivity}
        />
      )}
    </Stack>
  );
}
