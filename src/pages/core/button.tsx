import Head from "next/head";
import { Box, Flex, Grid, Text, Heading, Button } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { Smile } from "react-feather";

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Button | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Button</Heading>
        <Heading h3 intent="secondary">
          Use to trigger an operation.
        </Heading>

        <Flex col gap={sp("xxl")}>
          <Example
            name="Intent"
            description="Indicate the purpose of a button."
            code={`<Grid colNum={5}>
  <Box>
    <Button intent="primary">Primary</Button>
  </Box>
  <Box>
    <Button intent="secondary">Secondary</Button>
  </Box>
  <Box>
    <Button intent="success">Success</Button>
  </Box>
  <Box>
    <Button intent="warning">Warning</Button>
  </Box>
  <Box>
    <Button intent="danger">Danger</Button>
  </Box>
</Grid>`}
          >
            <Grid colNum={5}>
              <Box>
                <Button intent="primary">Primary</Button>
              </Box>
              <Box>
                <Button intent="secondary">Secondary</Button>
              </Box>
              <Box>
                <Button intent="success">Success</Button>
              </Box>
              <Box>
                <Button intent="warning">Warning</Button>
              </Box>
              <Box>
                <Button intent="danger">Danger</Button>
              </Box>
            </Grid>
          </Example>

          <Example
            name="Appearance"
            description="Stylistic appearances for buttons."
            code={`<Grid colNum={3}>
  <Box>
    <Button appearance="fill">Fill</Button>
  </Box>
  <Box>
    <Button appearance="outline">Outline</Button>
  </Box>
  <Box>
    <Button appearance="minimal">Minimal</Button>
  </Box>
</Grid>`}
          >
            <Grid colNum={3}>
              <Box>
                <Button appearance="fill">Fill</Button>
              </Box>
              <Box>
                <Button appearance="outline">Outline</Button>
              </Box>
              <Box>
                <Button appearance="minimal">Minimal</Button>
              </Box>
            </Grid>
          </Example>

          <Example
            name="Sizes"
            code={`<Grid colNum={3}>
  <Box>
    <Button size="small">Button</Button>
  </Box>
  <Box>
    <Button size="medium">Button</Button>
  </Box>
  <Box>
    <Button size="large">Button</Button>
  </Box>
</Grid>`}
          >
            <Grid colNum={3}>
              <Box>
                <Button size="small">Button</Button>
              </Box>
              <Box>
                <Button size="medium">Button</Button>
              </Box>
              <Box>
                <Button size="large">Button</Button>
              </Box>
            </Grid>
          </Example>

          <Example
            name="Shapes"
            description=""
            code={`'<Grid colNum={6}>
<Box>
  <Button size="small" shape="square" icon={<Smile />} />
</Box>
<Box>
  <Button size="medium" shape="square" icon={<Smile />} />
</Box>
<Box>
  <Button size="large" shape="square" icon={<Smile />} />
</Box>
<Box>
  <Button size="small" shape="circle" icon={<Smile />} />
</Box>
<Box>
  <Button size="medium" shape="circle" icon={<Smile />} />
</Box>
<Box>
  <Button size="large" shape="circle" icon={<Smile />} />
</Box>
</Grid>`}
          >
            <Grid colNum={6}>
              <Box>
                <Button size="small" shape="square" icon={<Smile />} />
              </Box>
              <Box>
                <Button size="medium" shape="square" icon={<Smile />} />
              </Box>
              <Box>
                <Button size="large" shape="square" icon={<Smile />} />
              </Box>
              <Box>
                <Button size="small" shape="circle" icon={<Smile />} />
              </Box>
              <Box>
                <Button size="medium" shape="circle" icon={<Smile />} />
              </Box>
              <Box>
                <Button size="large" shape="circle" icon={<Smile />} />
              </Box>
            </Grid>
          </Example>

          <Example
            name="Icon"
            code={`<Button icon={<Smile />}>Prefix</Button>`}
          >
            <Button icon={<Smile />}>Prefix</Button>
          </Example>

          <Example
            name="Loading"
            description={
              <>
                <Text code>onClick</Text>s that return <Text code>Promise</Text>
                s, default trigger a loading state.
              </>
            }
            code={`<Grid colNum={2}>
  <Box>
    <Button
      onClick={() => new Promise((resolve) => setTimeout(resolve, 2400))}
    >
      Try Me
    </Button>
  </Box>
  <Box>
    <Button loading>Loading</Button>
  </Box>
</Grid>`}
          >
            <Grid colNum={2}>
              <Box>
                <Button
                  onClick={() =>
                    new Promise((resolve) => setTimeout(resolve, 2400))
                  }
                >
                  Try Me
                </Button>
              </Box>
              <Box>
                <Button loading>Loading</Button>
              </Box>
            </Grid>
          </Example>

          <Example name="Disabled" code={`<Button disabled>Disabled</Button>`}>
            <Button disabled>Disabled</Button>
          </Example>

          <Example
            name="Colors"
            description="Use named colors."
            code={`<Grid colNum={5}>
  <Box>
    <Button color="red">Red</Button>
  </Box>
  <Box>
    <Button color="amber">Amber</Button>
  </Box>
  <Box>
    <Button color="green">Green</Button>
  </Box>
  <Box>
    <Button color="teal">Teal</Button>
  </Box>
  <Box>
    <Button color="pink">Pink</Button>
  </Box>
</Grid>`}
          >
            <Grid colNum={5}>
              <Box>
                <Button color="red">Red</Button>
              </Box>
              <Box>
                <Button color="amber">Amber</Button>
              </Box>
              <Box>
                <Button color="green">Green</Button>
              </Box>
              <Box>
                <Button color="teal">Teal</Button>
              </Box>
              <Box>
                <Button color="pink">Pink</Button>
              </Box>
            </Grid>
          </Example>
        </Flex>
      </div>
    </>
  );
}
