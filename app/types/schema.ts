import * as z from "zod";

export const UserSchema = z.object({
  company: z.optional(z.string()),
  role: z.optional(z.string()),
  experiencePeriod: z.optional(z.number()),
  socialMedia: z.optional(z.object({
    twitter: z.optional(z.string().url()),
    note: z.optional(z.string().url()),
  })),
  selfIntroduction: z.optional(z.string()),
  communityJoinedBackground: z.optional(
    z.object({
      collectingInformation: z.optional(z.boolean()),
      connectingPeople: z.optional(z.boolean()),
      other: z.optional(z.boolean()),
      descriptionWhenOther: z.optional(z.string()),
    }),
  ),
  communityInterestedActivities: z.optional(z.array(z.string())),
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
