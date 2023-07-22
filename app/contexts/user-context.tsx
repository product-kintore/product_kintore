import { createContext } from "react";
import { User } from "firebase/auth";

type UserContextProps = {
  user: User | null;
  setUser: (u: User) => void;
};

export const UserContext = createContext<UserContextProps | null>(null);
