import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

type Props = {
  menuItems: string[];
  label: string;
}

export default function SearchSelectInput({ props }: { props: Props }) {
  const [, setSelectedItem] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  return (
    <Grid item xs={4}>
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select label={props.label} onChange={handleChange}>
          {props.menuItems.map((menuItem, index) => (
            <MenuItem key={index} value={menuItem}>
              {menuItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
