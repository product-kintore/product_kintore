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
const roles = [
  "PM",
  "Engineer",
  "Marketing",
  "Sales",
  "Cutomer Success",
  "Other",
];

export default function SearchRoleSelectInput() {
  const [, setRole] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <Grid item xs={4}>
      <FormControl fullWidth>
        <InputLabel>ロール</InputLabel>
        <Select label="ロール" onChange={handleChange}>
          {roles.map((role, index) => (
            <MenuItem key={index} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
