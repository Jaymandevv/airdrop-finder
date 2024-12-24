import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface componentsType {
  title: string;
  url: string;
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
];

function Header() {
  return (
    <nav className="w-full">
      <div className="flex justify-between">
        <div className="logo bg-red-500">Airdrop finder</div>

        <NavigationMenu>
          <NavigationMenuList>
            {components.map((comp) => (
              <>
                <NavigationMenuItem>
                  <Link href={comp.url} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{comp.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Header;
