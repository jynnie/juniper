import Head from "next/head";
import { Box, Flex, Text, Heading, SearchableSelect } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { useState } from "react";

const EXAMPLE_OPTIONS = [
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" },
];

export default function SelectPage() {
  const [value, setValue] = useState<number | undefined>();

  return (
    <>
      <Head>
        <title>Searchable Select | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>[WIP] Searchable Select</Heading>
        <Heading h3 intent="secondary">
          Auto-complete {"&"} select options from large lists
        </Heading>

        <Flex col gap={sp("xxl")} marginTop={sp(16)}>
          <Example
            code={`() => {
  const [value, setValue] = useState<number | undefined>();
  
  return <SearchableSelect
    options={EXAMPLE_OPTIONS}
    value={value}
    onChange={setValue}
  />
}`}
          >
            <SearchableSelect
              options={EXAMPLE_OPTIONS}
              value={value}
              onChange={setValue}
            />
          </Example>

          <Box>
            <Heading h2>Props</Heading>
            {/* TODO: */}
          </Box>

          <Example code={`<SearchableSelect disabled />`} name="Disabled">
            <SearchableSelect disabled />
          </Example>

          <Box>
            <Heading h2>Naming</Heading>
            <Text p>
              This pattern is known known as a Combobox or Autocomplete in other
              design systems. However, we felt that such a name is less
              descriptive and meaningful to the average developer.
            </Text>
            <Text p>
              This pattern is often used as a Select. The main difference
              between this pattern and a native select is more powerful querying
              of options. As such, to remain descriptive and discoverable, we
              {"'"}ve opted for Searchable Select.
            </Text>
          </Box>
        </Flex>
      </div>
    </>
  );
}
