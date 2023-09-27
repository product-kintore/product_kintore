import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { UserSearchParams } from "@/app/types/schema";

type Props = {
  menuItems: (string | undefined)[];
  label: string;
  searchParamsLabel: string;
  searchParams: UserSearchParams;
  setSearchParams: Dispatch<SetStateAction<UserSearchParams>>;
};

export default function SearchSelectInput({ props }: { props: Props }) {
  const { label, menuItems, searchParams, setSearchParams, searchParamsLabel } =
    props;

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams({
      ...searchParams,
      [searchParamsLabel]: event.target.value,
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} onChange={handleChange}>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} value={menuItem}>
            {menuItem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
