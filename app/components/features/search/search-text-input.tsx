import { TextField, FormControl } from "@mui/material";
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";
import { UserSearchParams } from "@/app/types/schema";

type Props = {
  label: string;
  type: HTMLInputTypeAttribute;
  searchParamsLabel: string;
  searchParams: UserSearchParams;
  setSearchParams: Dispatch<SetStateAction<UserSearchParams>>;
};

export default function SearchTextInput(props: Props) {
  const { label, type, searchParams, setSearchParams, searchParamsLabel } =
    props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...searchParams,
      [searchParamsLabel]: event.target.value,
    });
  };

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        variant="outlined"
        onChange={handleChange}
        type={type}
      />
    </FormControl>
  );
}
