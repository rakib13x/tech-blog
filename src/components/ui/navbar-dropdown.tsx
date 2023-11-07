"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface IProps {}

const NavarDropdown: React.FC<IProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const adminLinks = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ];
  const userLinks = [
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Manage Blogs",
      href: "/settings/manage-blogs",
    },
  ];

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          color="primary"
          size="sm"
          isBordered
          as="button"
          className="transition-transform object-cover"
          //   src={user?.profilePicture}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="user-email" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          {/* <p className="font-semibold">{user?.email}</p> */}
        </DropdownItem>
        <DropdownItem key="profile">
          <NextLink className="w-full block" href={`/profile`}>
            My Profile
          </NextLink>
        </DropdownItem>

        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavarDropdown;
