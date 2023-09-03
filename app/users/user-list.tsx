"use client";

import { Paper, Grid } from "@mui/material";
import { SearchForm } from "@/app/components/features/search";
import useSWR, { useSWRConfig } from "swr";
import { fetchUsers } from "@/app/lib/firebase";
import { Progress } from "@/app/components/common/presentations";
import { useRouter } from "next/navigation";
import { ProfileCard } from "@/app/components/features/profile";
import { useState } from "react";
import { UserSearchParams } from "../types/schema";

export default function UserList() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [searchParams, setSearchParams] = useState<UserSearchParams>({});

  const handleDetailPageClick = (userId: string) => {
    router.push(`/users/${userId}`);
  };

  const { data, error, isLoading } = useSWR("users-list", () => {
    return fetchUsers(searchParams);
  });

  const handleSubmit = () => {
    mutate("users-list", fetchUsers(searchParams));
  };

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch users</>;

  return (
    data && (
      <Paper sx={{ margin: (theme) => theme.spacing(8) }} elevation={0}>
        <SearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSubmit={handleSubmit}
        />
        <Grid container spacing={2}>
          {data && data.length > 0 ? (
            data.map((user, index) => (
              <Grid item xs={3} key={index}>
                <ProfileCard user={user} handleClick={handleDetailPageClick} />
              </Grid>
            ))
          ) : (
            <p>ユーザーが見つかりませんでした</p>
          )}
        </Grid>
      </Paper>
    )
  );
}
