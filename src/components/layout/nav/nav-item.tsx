"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { type MenusType } from "~/mock/menus";

type NavItemProps = {
  item: MenusType;
};

const NavItem = ({ item }: NavItemProps) => {
  const path = usePathname();
  return (
    <Button
      variant="link"
      asChild
      className={cn("px-0 uppercase", { "font-bold": path === item.url })}
    >
      <Link href={item.url}>{item.title}</Link>
    </Button>
  );
};

export default NavItem;
