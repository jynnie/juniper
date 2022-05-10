import React, { useState } from "react";
import Box, { BoxProps } from "ui-box";
import cn from "classnames";

import { Text } from "../Text/Text";
import { Flex } from "../primitives/Flex";

import { ChevronDown } from "react-feather";

interface MenuItemProps extends BoxProps<React.ElementType> {
  selected?: boolean;
}

function MenuItem({ className, selected, children, ...props }: MenuItemProps) {
  return (
    <Box
      className={cn(className, "jnpr-menuItem", {
        [`jnpr-menuItem-selected`]: !!selected,
      })}
      role="menuitem"
      tabIndex={0}
      data-isselectable="true"
      {...props}
    >
      <Text>{children}</Text>
    </Box>
  );
}

interface MenuGroupProps extends BoxProps<React.ElementType> {
  title: string;
  defaultShow?: boolean;
}

function MenuGroup({
  className,
  title,
  defaultShow = true,
  children,
  ...props
}: MenuGroupProps) {
  const [showGroup, setShowGroup] = useState(defaultShow);

  return (
    <Flex col className={cn(className, "jnpr-menuGroup")} {...props}>
      <Flex
        className={cn("jnpr-menuItem", "jnpr-menuGroup-header")}
        onClick={() => setShowGroup(!showGroup)}
        align="center"
        justify="space-between"
      >
        <Text>{title}</Text>
        <ChevronDown
          className={cn(`jnpr-chevron-${showGroup ? "down" : "right"}`)}
        />
      </Flex>

      {!!showGroup && children}
    </Flex>
  );
}

interface MenuNavProps extends BoxProps<React.ElementType> {
  appearance?: "fill" | "outline" | "minimal";
  horizontal?: boolean;
}

function MenuNav({
  className,
  children,
  horizontal,
  appearance = "fill",
  ...props
}: MenuNavProps) {
  return (
    <Flex
      col={!horizontal}
      is="nav"
      role="menu"
      className={cn(className, "jnpr-menu", `jnpr-menu-${appearance}`)}
      {...props}
    >
      {children}
    </Flex>
  );
}

export const Menu = Object.assign(MenuNav, {
  Item: MenuItem,
  Group: MenuGroup,
});

export default Menu;
