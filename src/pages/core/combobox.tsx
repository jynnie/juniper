import Head from "next/head";
import { Box, Flex, Text, Heading, Button } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { Combobox } from "components/Combobox/Combobox";
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
        <title>Combobox | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>[WIP] Combobox</Heading>
        <Heading h3 intent="secondary">
          Auto-complete {"&"} select options from large lists
        </Heading>
        <Flex col gap={sp("xxl")}>
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
            <Combobox
              options={EXAMPLE_OPTIONS}
              value={value}
              onChange={setValue}
              isClearable
            />
          </Example>

          <Example code={`<Select disabled />`}>
            <Combobox disabled />
          </Example>
        </Flex>
      </div>
    </>
  );
}
