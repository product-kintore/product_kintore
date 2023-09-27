import * as z from "zod";

export const UserSchema = z.object({
  company: z.string(),
  role: z.string(),
  experiencePeriod: z.number(),
  socialMedia: z
    .object({
      twitter: z.string().url().nullable(),
      note: z.string().url().nullable(),
    })
    .nullable(),
  selfIntroduction: z.string(),
  communityJoinedBackground: z.object({
    collectingInformation: z.boolean(),
    connectingPeople: z.boolean(),
    other: z.boolean(),
    descriptionWhenOther: z.string().nullable(),
  }),
  communityInterestedActivities: z.array(z.string()).min(1),
});

export type UserParams = z.infer<typeof UserSchema>;

export type UserParamsWhenSignin = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
};

export const ActivitySchema = z.object({
  date: z.date(),
  title: z.string(),
  description: z.string(),
});

export type ActivityParams = z.infer<typeof ActivitySchema>;

export type UserSearchParams = {
  role?: string;
  experiencePeriodSince?: number;
  experiencePeriodTill?: number;
  communityInterestedActivity?: string;
  name?: string;
  company?: string;
};
