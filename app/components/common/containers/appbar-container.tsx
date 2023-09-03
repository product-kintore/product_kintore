"use client";

import { useContext } from "react";
import {
  AuthenticatedAppbar,
  Appbar,
} from "@/app/components/common/presentations";
import { useRouter } from "next/navigation";
import { Group, Book, AccountBox } from "@mui/icons-material";
import { UserContext } from "@/app/contexts/user-context";

const drawerLinkList = [
  {
    text: "自己紹介一覧",
    icon: <Group />,
    href: "/users",
  },
  {
    text: "メンバーの活動記録",
    icon: <Book />,
    href: "/activities",
  },
  {
    text: "マイプロフィール",
    icon: <AccountBox />,
    href: "/myprofile",
  },
];

export default function AppbarContainer() {
  const router = useRouter();
  const userContext = useContext(UserContext);

  const handleDrawerMenuClick = (href: string) => {
    router.push(href);
  };

  const handleTitleClick = () => {
    router.push("/");
  };

  return (
    <div style={{ display: "flex" }}>
      {userContext?.user ? (
        <AuthenticatedAppbar
          linkList={drawerLinkList}
          handleDrawerMenuClick={(href) => handleDrawerMenuClick(href)}
          handleTitleClick={handleTitleClick}
        />
      ) : (
        <Appbar handleClick={handleTitleClick} />
      )}
    </div>
  );
}
