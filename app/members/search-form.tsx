import { Grid, Stack, Button, Typography } from "@mui/material";
import SearchTextInput from "@/app/members/search-text-input";
import SearchSelectInput from "@/app/members/search-select-input";

const roleSelectInputLabel = "ロール";
// TODO: fix type
const roleMenuItems = [
  "PM",
  "Engineer",
  "Marketing",
  "Sales",
  "Cutomer Success",
  "Other",
];

const pmExperienceSelectInputLabel = "PM歴"
// TODO: fix type
const pmExperienceMenuItems = [
  "PM経験無し",
  "PMなりたて(1年未満)",
  "PM歴1~5年",
  "PM歴5~10年",
]

const activitySelectInputLabel = "興味ある活動"
// TODO: fix type
const activityMenuItems = [
  "輪読会",
  "図書館LT",
  "飲み会/交流",
  "Shuffle Tea Time",
]

export default function SearchForm() {
  return (
    <Stack spacing={2} margin={8}>
      <SearchTextInput />
      <Typography variant="body1" marginTop={3} marginLeft={3}>
        属性で絞り込む
      </Typography>
      <Grid container>
        <SearchSelectInput
          props={{
            menuItems: roleMenuItems,
            label: roleSelectInputLabel,
          }}
        />
        <SearchSelectInput
          props={{
            menuItems: pmExperienceMenuItems,
            label: pmExperienceSelectInputLabel,
          }}
        />
        <SearchSelectInput
          props={{
            menuItems: activityMenuItems,
            label: activitySelectInputLabel,
          }}
        />
      </Grid>
      <Button variant="contained" color="primary">
        検索
      </Button>
    </Stack>
  );
}
