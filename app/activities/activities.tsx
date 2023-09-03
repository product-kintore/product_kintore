"use client";

import { Stack } from "@mui/material";
import { fetchActivities } from "@/app/lib/firebase";
import useSWR from "swr";
import { Progress } from "@/app/components/common/presentations";
import { ActivityList } from "@/app/components/features/activity";

export default function Activities() {
  const { data, error, isLoading } = useSWR("activiies", () => {
    return fetchActivities();
  });

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch activities</>;

  return (
    data &&
    data.length > 0 && (
      <Stack spacing={2} margin={8}>
        <ActivityList activities={data} />
      </Stack>
    )
  );
}
