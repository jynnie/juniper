import Head from "next/head";
import { Box, Flex, Heading, Grid } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";

export default function GridPage() {
  return (
    <>
      <Head>
        <title>Grid | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Grid</Heading>
        <Heading h3 intent="secondary">
          Basic grid
        </Heading>
        <Flex col gap={sp("xxl")}>
          <Example
            code={`<Grid colNum={3} gap={16}>
  <Box>Item One</Box>
  <Box>Item Two</Box>
  <Box>Item Three</Box>
  <Box gridColumn={2}>Item Four</Box>
</Grid>`}
          >
            <Grid colNum={3} gap={16}>
              <Box>Item One</Box>
              <Box>Item Two</Box>
              <Box>Item Three</Box>
              <Box gridColumn={2}>Item Four</Box>
            </Grid>
          </Example>
        </Flex>
      </div>
    </>
  );
}
