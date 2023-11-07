"use client";
import { ThemeSwitch } from "@/components/ui/theme-switch";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { usePathname } from "next/navigation";
import { AcmeIcon } from "@/components/icons";
import NavbarSearchInput from "./navbar-search-input";
import WritePostButton from "@/components/ui/write-post-button";
import LoginLogoutSwitch from "@/components/ui/login-logout-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="border border-default/50 z-50 print:hidden"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <AcmeIcon size={60} />
          </NextLink>
          <div className="size-10 flex justify-center lg:hidden">
            <NavbarMenuToggle />
          </div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  pathName === item.href ? "text-primary" : ""
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          {<NavbarSearchInput />}
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch className="hidden lg:inline-block" />
        </NavbarItem>

        <NavbarItem>
          <WritePostButton />
        </NavbarItem>

        <LoginLogoutSwitch />
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarItem>
          <WritePostButton />
        </NavbarItem>
        <LoginLogoutSwitch />
      </NavbarContent>

      <NavbarMenu className="z-50">
        <NavbarSearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  pathName === item.href ? "text-primary" : ""
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
