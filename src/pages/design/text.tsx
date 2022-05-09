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
  Codeblock,
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

          <Example
            name="Headings"
            code={`<Heading h1>If it gets wet, its body melts.</Heading>
<Heading h2>If it gets wet, its body melts.</Heading>
<Heading h3>If it gets wet, its body melts.</Heading>
<Heading h4>If it gets wet, its body melts.</Heading>
<Heading h5>If it gets wet, its body melts.</Heading>
<Heading h6>If it gets wet, its body melts.</Heading>`}
          >
            <Heading h1>If it gets wet, its body melts.</Heading>
            <Heading h2>If it gets wet, its body melts.</Heading>
            <Heading h3>If it gets wet, its body melts.</Heading>
            <Heading h4>If it gets wet, its body melts.</Heading>
            <Heading h5>If it gets wet, its body melts.</Heading>
            <Heading h6>If it gets wet, its body melts.</Heading>
          </Example>

          <Example
            name="Paragraph"
            code={`<Paragraph>
  It has a weakness for shiny things. It’s been known to sneak into the
  nests of Gabite—noted collectors of jewels—in search of treasure.
</Paragraph>
<Paragraph bold>
  It has a weakness for shiny things. It’s been known to sneak into the
  nests of Gabite—noted collectors of jewels—in search of treasure.
</Paragraph>
<Paragraph small>
  It has a weakness for shiny things. It’s been known to sneak into the
  nests of Gabite—noted collectors of jewels—in search of treasure.
</Paragraph>`}
          >
            <Paragraph>
              It has a weakness for shiny things. It’s been known to sneak into
              the nests of Gabite—noted collectors of jewels—in search of
              treasure.
            </Paragraph>
            <Paragraph bold>
              It has a weakness for shiny things. It’s been known to sneak into
              the nests of Gabite—noted collectors of jewels—in search of
              treasure.
            </Paragraph>
            <Paragraph small>
              It has a weakness for shiny things. It’s been known to sneak into
              the nests of Gabite—noted collectors of jewels—in search of
              treasure.
            </Paragraph>
          </Example>

          <Example
            name="Inline Code"
            code={`<Text>
  They eat so many fish Pokémon that when <Text code>Wailord</Text> become
  too numerous, fishermen have to chase them off.
</Text>`}
          >
            <Text>
              They eat so many fish Pokémon that when <Text code>Wailord</Text>{" "}
              become too numerous, fishermen have to chase them off.
            </Text>
          </Example>

          <Example
            name="Codeblock"
            description="This is just the styling for the codeblock. It does not come with syntax highlighting. If you're looking for that, try the SyntaxHighlighter library."
            code={`<Codeblock>{${"`"}yarn add juniper${"\\"}nyarn start${"`"}}</Codeblock>`}
          >
            <Codeblock>{`yarn add juniper\nyarn start`}</Codeblock>
          </Example>
        </Flex>
      </div>
    </>
  );
}
