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
// import { Button } from "@/components/ui/button";

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
        title: "CEX",
        url: "/exchanges/cex",
      },

      {
        title: "DEX",
        url: "/exchanges/dex",
      },
    ],
  },
];

function Header() {
  return (
    <nav className="flex items-center justify-between">
      <p>Airdrop Finder</p>

      <div className="flex gap-6  items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {components.map((comp) => (
              <div key={comp.url}>
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
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-3">
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
