"use client";

import { NavbarItem } from "@nextui-org/navbar";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import NavarDropdown from "./navbar-dropdown";

interface IProps {}

const LoginLogoutSwitch: React.FC<IProps> = () => {
  return (
    <>
      <NavbarItem>
        <NavarDropdown />
      </NavbarItem>

      <div className="hidden lg:flex">
        <NextLink
          className={`${buttonStyles({
            radius: "full",
            variant: "light",
          })} hover:bg-default-100 duration-200 active:scale-95`}
          href={`/login`}
        >
          Log In
        </NextLink>
        <NextLink
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "solid",
          })} duration-200 active:scale-95`}
          href={`/signup`}
        >
          Sign Up
        </NextLink>
      </div>
    </>
  );
};

export default LoginLogoutSwitch;
