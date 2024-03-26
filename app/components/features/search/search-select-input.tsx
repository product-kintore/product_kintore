import {
  FormControl,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { UserSearchParams } from "@/app/types/schema";
import Select from "react-select"; 

type Props = {
  options: { value: string; label: string }[]
  placeholder: string;
  searchParamsLabel: string;
  searchParams: UserSearchParams;
  setSearchParams: Dispatch<SetStateAction<UserSearchParams>>;
};

export default function SearchSelectInput({ props }: { props: Props }) {
  const { placeholder, options, searchParams, setSearchParams, searchParamsLabel } =
    props;

  const handleChange = (newValue: string) => {
    setSearchParams({
      ...searchParams,
      [searchParamsLabel]: newValue,
    });
  };

  return (
    <FormControl fullWidth>
      <Select
        options={options} 
        onChange={(selectedOption) => {
          if (selectedOption === null) return;
          handleChange(selectedOption.value);
        }}
        placeholder={placeholder}
        isClearable={true}
        // FIXME: Fix it in a non-fixed value way.
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: "55.981px",
          }),
        }}
      />
    </FormControl>
  );
}
