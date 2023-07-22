"use client";

import { useContext } from "react";
import AuthenticatedAppbar from "@/app/components/authenticated-appbar";
import Appbar from "@/app/components/appbar";
import { useRouter } from "next/navigation";
import { Group, Book, AccountBox } from "@mui/icons-material";
import { UserContext } from "@/app/contexts/user-context";

const drawerLinkList = [
  {
    text: "自己紹介一覧",
    icon: <Group />,
    href: "/members",
  },
  {
    text: "活動記録",
    icon: <Book />,
    // TODO: fixed href
    href: "/myprofile",
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

  return (
    <div style={{ display: "flex" }}>
      {userContext?.user ? (
        <AuthenticatedAppbar
          linkList={drawerLinkList}
          handleClick={(href) => handleDrawerMenuClick(href)}
        />
      ) : (
        <Appbar />
      )}
    </div>
  );
}
