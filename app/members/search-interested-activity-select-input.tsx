import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

// TODO: fixed type
const activities = ["輪読会", "図書館LT", "飲み会/交流", "Shuffle Tea Time"];

export default function SearchInterestedActivitySelectInput() {
  const [, setActivity] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setActivity(event.target.value as string);
  };

  return (
    <Grid item xs={4}>
      <FormControl fullWidth>
        <InputLabel>ロール</InputLabel>
        <Select label="ロール" onChange={handleChange}>
          {activities.map((activity, index) => (
            <MenuItem key={index} value={activity}>
              {activity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
