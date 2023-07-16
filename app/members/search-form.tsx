import { Grid, Stack, Button, Typography } from "@mui/material";
import SearchTextInput from "@/app/members/search-text-input";
import SearchRoleSelectInput from "./search-role-select-input";
import SearchInterestedActivitySelectInput from "./search-interested-activity-select-input";
import SearchPMExperienceSelectInput from "./search-pm-experience-select-input";

export default function SearchForm() {
  return (
    <Stack spacing={2} margin={8}>
      <SearchTextInput />
      <Typography variant="body1" marginTop={3} marginLeft={3}>
        属性で絞り込む
      </Typography>
      <Grid container>
        <SearchRoleSelectInput />
        <SearchInterestedActivitySelectInput />
        <SearchPMExperienceSelectInput />
      </Grid>
      <Button variant="contained" color="primary">
        検索
      </Button>
    </Stack>
  );
}
