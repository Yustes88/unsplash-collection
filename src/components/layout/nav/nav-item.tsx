"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { type MenusType } from "~/mock/menus";

type NavItemProps = {
  item: MenusType;
};

const NavItem = ({ item }: NavItemProps) => {
  const path = usePathname();
  return (
    <Link href={item.url}>
      <Button variant={path == item.url ? "secondary" : "ghost"}>
        {item.title}
      </Button>
    </Link>
  );
};

export default NavItem;
