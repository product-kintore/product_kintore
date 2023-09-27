"use client";

import { Paper, Alert, Snackbar } from "@mui/material";
import { updateUser } from "@/app/lib/firebase";
import { useContext, useState } from "react";
import { UserContext } from "@/app/contexts/user-context";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { fetchUser } from "@/app/lib/firebase";
import { Progress } from "@/app/components/common/presentations";
import { ProfileForm } from "@/app/components/features/profile";
import { UserParams } from "@/app/types/schema";
import { SubmitHandler } from "react-hook-form";

export default function EditForm() {
  const userContext = useContext(UserContext);
  const docId = userContext?.user?.uid || "";
  const router = useRouter();

  const {
    data: user,
    error,
    isLoading,
  } = useSWR(docId, () => {
    return fetchUser(docId);
  });

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

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

  const onSubmit: SubmitHandler<UserParams> = async (params) => {
    try {
      await updateUser(docId, params);
      setOpen(true);
      router.back();
    } catch (e) {
      setOpenError(true);
    }
  };

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch myprofile</>;

  return (
    <Paper elevation={1} sx={{ margin: 8, padding: 3 }}>
      {user ? (
        <>
          <ProfileForm user={user} onSubmit={onSubmit} />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
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
        </>
      ) : (
        <p>ユーザー情報がありません</p>
      )}
    </Paper>
  );
}
