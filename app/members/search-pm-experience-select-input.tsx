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
const pmExperiences = [
  "PM経験無し",
  "PMなりたて(1年未満)",
  "PM歴1~5年",
  "PM歴5~10年",
];

export default function SearchPMExperienceSelectInput() {
  const [, setPMExperience] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setPMExperience(event.target.value as string);
  };

  return (
    <Grid item xs={4}>
      <FormControl fullWidth>
        <InputLabel>ロール</InputLabel>
        <Select label="ロール" onChange={handleChange}>
          {pmExperiences.map((experience, index) => (
            <MenuItem key={index} value={experience}>
              {experience}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
