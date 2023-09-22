"use client";

import { Paper, Grid } from "@mui/material";
import MemberCard from "./member-card";
import SearchForm from "./search-form";
import useSWR from "swr";
import { fetchUsers } from "@/app/lib/firebase";
import Progress from "@/app/components/progress";

export default function MemberList() {
  const { data, error, isLoading } = useSWR("member-list", () => {
    return fetchUsers();
  });

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch members</>;

  return (
    data && (
      <Paper sx={{ margin: (theme) => theme.spacing(8) }} elevation={0}>
        <SearchForm />
        <Grid container spacing={2}>
          {data.map((user, index) => (
            <Grid item xs={3} key={index}>
              <MemberCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    )
  );
}
