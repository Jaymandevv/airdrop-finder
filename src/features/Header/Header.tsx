"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface componentsType {
  title: string;
  url: string;
  children?: {
    title: string;
    url: string;
  }[];
}

const components: componentsType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Trending",
    url: "#trending",
  },
  {
    title: "Latest",
    url: "#latest",
  },
  {
    title: "FAQ",
    url: "#faq",
  },
  {
    title: "Wallets",
    url: "#wallets",
  },
  {
    title: "Exchanges",
    url: "/exchanges",
    children: [
      {
        title: "Top Exchanges",
        url: "/exchanges/top-exchanges",
      },

      {
        title: "Instance Exchange",
        url: "/exchanges/instance-exchanges",
      },
    ],
  },
];

function Header() {
  return (
    <nav className="w-full  bg-green-500">
      <div className="flex justify-between">
        <div className="logo bg-red-500">Airdrop finder</div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {components.map((comp) => (
              <>
                {comp?.children ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{comp.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {comp.children.map((child) => (
                        <Link key={child.title} href={child.url} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>{child.title}</NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={comp.title}>
                    <Link href={comp.url} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{comp.title}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Header;
