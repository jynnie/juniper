import Head from "next/head";
import { Box, Flex, Grid, Heading, Menu } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Menu | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Menu</Heading>
        <Heading h3 intent="secondary">
          Navigation and dropdown menus.
        </Heading>

        <Flex col gap={sp("xxl")}>
          <Example
            code={`<Menu>
  <Menu.Item selected>Page One</Menu.Item>
  <Menu.Item>Page Two</Menu.Item>
</Menu>`}
          >
            <Menu>
              <Menu.Item selected>Page One</Menu.Item>
              <Menu.Item>Page Two</Menu.Item>
            </Menu>
          </Example>

          <Example
            name="Grouped Menu Items"
            code={`<Menu>
  <Menu.Group title="Group One">
    <Menu.Item selected>Page One</Menu.Item>
    <Menu.Item>Page Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Page Three</Menu.Item>
</Menu>`}
          >
            <Menu>
              <Menu.Group title="Group One">
                <Menu.Item selected>Page One</Menu.Item>
                <Menu.Item>Page Two</Menu.Item>
              </Menu.Group>
              <Menu.Item>Page Three</Menu.Item>
            </Menu>
          </Example>

          <Example
            name="Appearance"
            description="Change the stylistic appearance of the menu."
            code={`<Menu>
  <Menu.Group title="Group One">
    <Menu.Item selected>Page One</Menu.Item>
    <Menu.Item>Page Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Page Three</Menu.Item>
</Menu>`}
          >
            <Grid colNum={3} gap={sp("xxl")}>
              <Box>
                <Menu appearance="fill">
                  <Menu.Group title="Fill">
                    <Menu.Item selected>Page One</Menu.Item>
                    <Menu.Item>Page Two</Menu.Item>
                  </Menu.Group>
                </Menu>
              </Box>

              <Box>
                <Menu appearance="minimal">
                  <Menu.Group title="Minimal">
                    <Menu.Item selected>Page One</Menu.Item>
                    <Menu.Item>Page Two</Menu.Item>
                  </Menu.Group>
                </Menu>
              </Box>

              <Box>
                <Menu appearance="outline">
                  <Menu.Group title="Outline">
                    <Menu.Item selected>Page One</Menu.Item>
                    <Menu.Item>Page Two</Menu.Item>
                  </Menu.Group>
                </Menu>
              </Box>
            </Grid>
          </Example>
        </Flex>
      </div>
    </>
  );
}
