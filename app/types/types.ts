import { Timestamp } from "firebase/firestore";

export type SocialMedia = {
  twitter: string;
  note: string;
};

export type CommunityJoinedBackground = {
  collectingInformation: boolean;
  connectingPeople: boolean;
  other: boolean;
  descriptionWhenOther: string;
};

export type User = {
  id: string;
  name: string;
  photoUrl: string;
  updatedAt: Timestamp;
  company: string;
  email: string;
  role: string;
  experiencePeriod: number;
  selfIntroduction: string;
  socialMedia: SocialMedia;
  communityJoinedBackground: CommunityJoinedBackground;
  communityInterestedActivities: string[];
};

export type Activity = {
  id: string;
  title: string;
  date: Timestamp;
  description: string;
};
