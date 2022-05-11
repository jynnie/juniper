import Head from "next/head";
import { Box, Flex, Text, Heading, Button } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { Select } from "components/Select/Select";
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
        <title>Select | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Select</Heading>
        <Heading h3 intent="secondary">
          Filter {"&"} select options from large lists
        </Heading>
        <Flex col gap={sp("xxl")}>
          <Text>Font st</Text>
          <Example
            code={`() => {
  const [value, setValue] = useState<number | undefined>();
  
  return <Select
    options={EXAMPLE_OPTIONS}
    value={value}
    onChange={setValue}
  />
}`}
          >
            <Select
              options={EXAMPLE_OPTIONS}
              value={value}
              onChange={setValue}
              isClearable
            />
          </Example>

          <Example code={`<Select disabled />`}>
            <Select disabled />
          </Example>
        </Flex>
      </div>
    </>
  );
}
