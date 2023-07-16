import { TextField, FormControl } from "@mui/material";

export default function SearchTextInput() {
  return (
    <FormControl>
      <TextField label="検索ワードを入力してください" variant="outlined" />
    </FormControl>
  );
}
