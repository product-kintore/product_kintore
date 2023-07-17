"use client";

import { Paper, Grid } from "@mui/material";
import MemberCard from "./member-card";
import Container from "../containers/container";
import SearchForm from "./search-form";

export default function Page() {
  return (
    <Container>
      <Paper sx={{ margin: (theme) => theme.spacing(8) }} elevation={0}>
        <SearchForm />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
          <Grid item xs={3}>
            <MemberCard />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
