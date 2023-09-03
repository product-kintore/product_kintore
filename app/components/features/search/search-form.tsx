import { Grid, Stack, Button, Typography } from "@mui/material";
import SearchTextInput from "@/app/components/features/search/search-text-input";
import SearchSelectInput from "@/app/components/features/search/search-select-input";
import { Dispatch, SetStateAction } from "react";
import { UserSearchParams } from "@/app/types/schema";

const roleMenuItems = [
  undefined,
  "PM",
  "Engineer",
  "Marketing",
  "Sales",
  "Cutomer Success",
  "Other",
];

const activityMenuItems = [
  undefined,
  "輪読会",
  "図書館LT",
  "飲み会/交流",
  "Shuffle Tea Time",
];

type Props = {
  searchParams: UserSearchParams;
  setSearchParams: Dispatch<SetStateAction<UserSearchParams>>;
  onSubmit: () => void;
};

export default function SearchForm(props: Props) {
  const { searchParams, setSearchParams, onSubmit } = props;

  return (
    <Stack spacing={2} margin={8}>
      <SearchTextInput
        label="名前で絞り込む"
        type="text"
        searchParamsLabel="name"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <SearchTextInput
        label="所属企業で絞り込む"
        type="text"
        searchParamsLabel="searchWord"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Typography variant="body1" marginTop={3} marginLeft={3}>
        属性で絞り込む
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <SearchSelectInput
            props={{
              menuItems: roleMenuItems,
              label: "ロール",
              searchParamsLabel: "role",
              searchParams: searchParams,
              setSearchParams: setSearchParams,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <SearchSelectInput
            props={{
              menuItems: activityMenuItems,
              label: "興味ある活動",
              searchParamsLabel: "communityInterestedActivity",
              searchParams: searchParams,
              setSearchParams: setSearchParams,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <SearchTextInput
            label="PM歴(~年以上)"
            type="number"
            searchParamsLabel="experiencePeriodSince"
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </Grid>
        <Grid item xs={3}>
          <SearchTextInput
            label="PM歴(~年以下)"
            type="number"
            searchParamsLabel="experiencePeriodSince"
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        検索
      </Button>
    </Stack>
  );
}
