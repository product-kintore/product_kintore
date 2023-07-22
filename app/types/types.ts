export type User = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  link?: Link;
};

export type Link = {
  twitter: string;
};
