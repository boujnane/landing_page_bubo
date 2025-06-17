import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navMenuConfig } from "@/config/nav-menu";
import type { MenuItem } from "@/types";
import useLocation from "@/hooks/useLocation";
import { t } from "i18next";

const links = navMenuConfig.links;
const pages = navMenuConfig.pagesNav[0];
const examples = navMenuConfig.examplesNav[0];
const blog = navMenuConfig.blog

export function MainNavigationMenu() {
  const { localizeUrl } = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Render the links section */}
        {links ? (
          <NavigationMenuItem>
            {links.map((link) => (
              <a
                key={link.href}
                href={localizeUrl(link.href)}
                className={navigationMenuTriggerStyle()}
                {...(link.forceReload ? { "data-astro-reload": true } : {})}
              >
                {t(link.title)}
              </a>
            ))}
          </NavigationMenuItem>
        ) : null}

        {/* Render the pages navigation */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t(pages.title)}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {pages.items?.map((page) => (
                <ListItem key={page.title} {...page} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Render the examples navigation */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t(examples.title)}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {examples.items?.map((example) => (
                <ListItem key={example.title} {...example} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            key={blog.href}
            href={localizeUrl(blog.href)}
            className={navigationMenuTriggerStyle()}
            {...(blog.forceReload ? { "data-astro-reload": true } : {})}
          >
            {t(blog.title)}
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload,
}) => {
  const target = external ? "_blank" : undefined;
  const { localizeUrl } = useLocation();

  return (
    <li>
      <a
        target={target}
        href={disabled ? undefined : localizeUrl(href)}
        {...(forceReload ? { "data-astro-reload": true } : {})}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : ""
        )}
      >
        <div className="flex items-center text-sm font-medium leading-none">
          <span className="mr-2">{t(title)}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              radius="sm"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge
              radius="sm"
              className="h-5 px-1.5 text-xs font-medium bg-[#ebf5ff] hover:bg-[#ebf5ff] text-[#0068d6]"
            >
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {t(description || "")}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
