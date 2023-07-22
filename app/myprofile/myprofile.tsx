"use client";

import { useContext } from "react";
import { UserContext } from "@/app/contexts/user-context";
import { fetchUser } from "@/app/lib/firebase";
import useSWR from "swr";
import Progress from "@/app/components/progress";
import ProfileContainer from "@/app/containers/profile-container";

export default function Myprofile() {
  const userContext = useContext(UserContext);
  const uid = userContext?.user?.uid || "";

  const { data, error, isLoading } = useSWR(uid, () => {
    return fetchUser(uid);
  });

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch myprofile</>;

  return data && <ProfileContainer user={data} />;
}
