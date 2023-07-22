"use client";

import { fetchUser } from "@/app/lib/firebase";
import useSWR from "swr";
import Progress from "@/app/components/progress";
import ProfileContainer from "@/app/containers/profile-container";

export default function MemeberProfile({ slug }: { slug: string }) {
  const { data, error, isLoading } = useSWR(slug, () => {
    return fetchUser(slug);
  });

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch myprofile</>;

  return data && <ProfileContainer user={data} />;
}
