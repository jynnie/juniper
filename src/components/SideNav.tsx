import Link from "next/link";
import { useRouter } from "next/router";

import { Text, Menu } from "components";

import styles from "../styles/index.module.css";

const NAV = [
  {
    title: "Styleguide",
    items: [
      { title: "Color", path: "/design/color" },
      { title: "Text", path: "/design/text" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <div className={styles.sidenav}>
      <Link href="/">
        <Text h3 cursor="pointer">
          Juniper UI
        </Text>
      </Link>

      <Menu appearance="fill">
        {NAV.map((group) => (
          <Menu.Group key={group.title} title={group.title}>
            {group.items.map((item) => (
              <Link key={item.title} href={item.path}>
                <Menu.Item selected={router.pathname === item.path}>
                  <Text>{item.title}</Text>
                </Menu.Item>
              </Link>
            ))}
          </Menu.Group>
        ))}
      </Menu>
    </div>
  );
}
