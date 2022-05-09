import Head from "next/head";
import { Box, Flex, Heading } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";

export default function FlexPage() {
  // TODO: Add a table of props

  return (
    <>
      <Head>
        <title>Flex | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Flex</Heading>
        <Heading h3 intent="secondary">
          Basic flexbox
        </Heading>
        <Flex col gap={sp("xxl")}>
          <Example
            code={`<Flex col={false} gap={16} wrap justify="space-between" align="center">
  <Box>Item One</Box>
  <Box>Item Two</Box>
  <Box>Item Three</Box>
</Flex>`}
          >
            <Flex
              col={false}
              gap={16}
              wrap
              justify="space-between"
              align="center"
            >
              <Box>Item One</Box>
              <Box>Item Two</Box>
              <Box>Item Three</Box>
            </Flex>
          </Example>
        </Flex>
      </div>
    </>
  );
}
