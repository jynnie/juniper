import Head from "next/head";
import {
  Box,
  Flex,
  Divider,
  Grid,
  Text,
  Heading,
  Paragraph,
  Link,
} from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";

export default function TextPage() {
  return (
    <>
      <Head>
        <title>🌿🫐 | Text</title>
      </Head>

      <div>
        <Heading h1>Text</Heading>
        <Heading h3 intent="secondary">
          Display text using defined typographic styles.
        </Heading>

        <Flex col gap={sp("xxl")}>
          <Example
            code={`<Heading>Juniper</Heading>
<Paragraph>
  <Link href="https://github.com/jynnie/juniper">Juniper</Link> is a 
  React component library made by <Text mark>jynnie</Text>. It's goal 
  is to provide powerful components built on <Text bold>pure CSS 
  variables</Text>, to give both power, but customizability.
</Paragraph>
<Paragraph>
  This text is acting as a lorem ipsum to provide examples of how 
  typographic text can look like. So even if I say you can install 
  using <Text code>yarn add juniper-ui</Text>, this is in fact not a
  true statement at the time this sentence is being written.
</Paragraph>`}
          >
            <Heading>Juniper</Heading>
            <Paragraph>
              <Link href="https://github.com/jynnie/juniper">Juniper</Link> is a
              React component library made by <Text mark>jynnie</Text>. It{"'"}s
              goal is to provide powerful components built on{" "}
              <Text bold>pure CSS variables</Text>, to give both power, but
              customizability.
            </Paragraph>
            <Paragraph>
              This text is acting as a lorem ipsum to provide examples of how
              typographic text can look like. So even if I say you can install
              using <Text code>yarn add juniper</Text>, this is in fact not a
              true statement at the time this sentence is being written.
            </Paragraph>
          </Example>
        </Flex>
      </div>
    </>
  );
}
