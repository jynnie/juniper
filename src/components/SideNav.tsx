import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import { Text, Menu } from "components";
import { Menu as MenuIcon, X } from "react-feather";

import styles from "../styles/index.module.css";
import { useState } from "react";

const NAV = [
  {
    title: "Styleguide",
    items: [{ title: "Color", path: "/styleguide/color" }],
  },
  {
    title: "Core",
    items: [
      { title: "Text", path: "/core/text" },
      { title: "Button", path: "/core/button" },
      { title: "Menu", path: "/core/menu" },
      { title: "Toast", path: "/core/toast" },
    ],
  },
  {
    title: "Data Entry",
    items: [
      {
        title: "Searchable Select",
        path: "/data-entry/searchable-select",
      },
    ],
  },
  {
    title: "Helpers",
    items: [
      { title: "Click Out", path: "/helpers/click-out" },
      { title: "Copy To Clipboard", path: "/helpers/copy-to-clipboard" },
    ],
  },
  {
    title: "Primitives",
    items: [
      { title: "Flex", path: "/primitives/flex" },
      { title: "Grid", path: "/primitives/grid" },
    ],
  },
  // {
  //   title: "Customize",
  //   items: [
  //      { title: "Custom Buttons", path: "/design/button/custom" },
  //   ]
  // }
];

export function SideNav() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div
        className={cn(styles.mobileMenuButton, "u-pointer")}
        onClick={() => setIsShow((s) => !s)}
      >
        {!isShow ? <MenuIcon /> : <X />}
      </div>

      <div className={cn(styles.sidenav, { [styles.show]: isShow })}>
        <Link href="/" passHref>
          <Text h3 cursor="pointer">
            Juniper UI
          </Text>
        </Link>

        <Menu appearance="fill">
          {NAV.map((group) => (
            <Menu.Group key={group.title} title={group.title}>
              {group.items.map((item) => (
                <Link key={item.title} href={item.path} passHref>
                  <Menu.Item selected={router.pathname === item.path}>
                    <Text>{item.title}</Text>
                  </Menu.Item>
                </Link>
              ))}
            </Menu.Group>
          ))}
        </Menu>
      </div>
    </>
  );
}
