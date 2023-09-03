"use client";

import { SubmitHandler } from "react-hook-form";
import { Paper, Alert, Snackbar } from "@mui/material";
import { updateActivity, fetchActivity } from "@/app/lib/firebase";
import { useContext, useState } from "react";
import { UserContext } from "@/app/contexts/user-context";
import { useRouter } from "next/navigation";
import { ActivityParams } from "@/app/types/schema";
import { ActivityForm } from "@/app/components/features/activity";
import useSWR from "swr";
import { Progress } from "@/app/components/common/presentations";

type Props = {
  activityId: string;
};

export default function ActivityEdit(props: Props) {
  const { activityId } = props;
  const userContext = useContext(UserContext);
  const userId = userContext?.user?.uid || "";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const {
    data: activity,
    error,
    isLoading,
  } = useSWR(`${userId}-activity-${activityId}`, () => {
    return fetchActivity(userId, activityId);
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleErrorClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const onSubmit: SubmitHandler<ActivityParams> = async (data) => {
    try {
      await updateActivity(userId, activityId, data);
      setOpen(true);
      router.back();
    } catch (e) {
      setOpenError(true);
    }
  };

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch selected activity</>;

  return (
    <Paper elevation={1} sx={{ margin: 8, padding: 3 }}>
      <ActivityForm
        onSubmit={onSubmit}
        initialValues={
          activity
            ? {
                date: activity.date.toDate(),
                title: activity.title,
                description: activity.description,
              }
            : {
                date: new Date(),
                title: "",
                description: "",
              }
        }
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          プロフィールを更新しました！
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          プロフィールの更新に失敗しました
        </Alert>
      </Snackbar>
    </Paper>
  );
}
