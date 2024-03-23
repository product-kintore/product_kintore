import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  TextField,
  FormControlLabel,
  FormGroup,
  Typography,
  Checkbox,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/app/types/types";
import { UserSchema, UserParams } from "@/app/types/schema";

// FIXME: add options
const interestedActivitiesOptions = [
  { value: "readingInTurns", label: "輪読会" },
];

type Props = {
  user: User;
  onSubmit: SubmitHandler<UserParams>;
};

export default function ProfileForm(props: Props) {
  const { user, onSubmit } = props;
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserParams>({
    defaultValues: {
      company: user.company,
      role: user.role,
      experiencePeriod: user.experiencePeriod,
      socialMedia: user.socialMedia,
      selfIntroduction: user.selfIntroduction,
      communityJoinedBackground: user.communityJoinedBackground,
      communityInterestedActivities: user.communityInterestedActivities,
    },
    resolver: zodResolver(UserSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <TextField
              label="所属企業"
              placeholder="株式会社XXXX"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <TextField
              label={"所属企業でのロール"}
              placeholder="PM"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="experiencePeriod"
          control={control}
          render={({ field }) => (
            <TextField
              label={"PM経験年数"}
              placeholder="3"
              type="number"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="selfIntroduction"
          control={control}
          render={({ field }) => (
            <TextField
              label={"自己紹介"}
              multiline
              {...field}
            />
          )}
        />
      </FormControl>
      <Box padding={1}>
        <Typography variant="body1" marginBottom={1} marginTop={1}>
          リンク
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="socialMedia.twitter"
            control={control}
            render={({ field }) => (
              <TextField
                label={"Twitter"}
                type="url"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="socialMedia.note"
            control={control}
            render={({ field }) => (
              <TextField
                label={"Note"}
                type="url"
                {...field}
              />
            )}
          />
        </FormControl>
      </Box>

      <Box padding={1}>
        <Typography variant="body1" marginBottom={1} marginTop={1}>
          入ったきっかけ
        </Typography>
        <FormGroup sx={{ marginBottom: 2 }}>
          <Controller
            name="communityJoinedBackground.collectingInformation"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="情報収集"
              />
            )}
          />
          <Controller
            name="communityJoinedBackground.connectingPeople"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="横のつながり・交流"
              />
            )}
          />
          <Controller
            name="communityJoinedBackground.other"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="その他"
              />
            )}
          />
          <Controller
            name="communityJoinedBackground.descriptionWhenOther"
            control={control}
            render={({ field }) => (
              <TextField
                label={"その他を選んだら書いてね"}
                multiline
                {...field}
              />
            )}
          />
        </FormGroup>
      </Box>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="communityInterestedActivities"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={interestedActivitiesOptions}
              value={interestedActivitiesOptions.filter((option) =>
                field.value ? field.value.includes(option.value) : false,
              )}
              isMulti
              placeholder="興味のある活動"
              onChange={(options) =>
                field.onChange(options.map((option) => option.value))
              }
            />
          )}
        />
        {errors.communityInterestedActivities && (
          <Typography color="error">
            興味のある活動を選択してください
          </Typography>
        )}
      </FormControl>
      <Box textAlign={"center"}>
        <Button variant="contained" color="primary" type="submit">
          更新する
        </Button>
      </Box>
    </form>
  );
}
