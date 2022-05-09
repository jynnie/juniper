import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Heading,
  ClickOutWrapper,
  useClickOut,
} from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { useState } from "react";

export default function ClickOutPage() {
  return (
    <>
      <Head>
        <title>Click Out | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Click Out</Heading>
        <Heading h3 intent="secondary">
          Trigger operations when clicking outside.
        </Heading>

        <Flex col gap={sp("xxl")}>
          <WrapperExample />
          <HookExample />
        </Flex>
      </div>
    </>
  );
}

function WrapperExample() {
  const [count, increment] = useCounter();

  return (
    <Example
      name="Wrapper"
      description={
        <>
          Wrap elements in a{" "}
          <Text code>{"<ClickOutWrapper onClickOut={...}/>"}</Text> to fire
          operations when clicking out of an element.
        </>
      }
      code={`<ClickOutWrapper onClickOut={increment}>
Times Clicked Outside of this Text: {count}
</ClickOutWrapper>`}
    >
      <ClickOutWrapper onClickOut={increment}>
        Times Clicked Outside of this Text: {count}
      </ClickOutWrapper>
    </Example>
  );
}

function HookExample() {
  const [count, increment] = useCounter();
  const ref = useClickOut({ onClickOut: increment });

  return (
    <Example
      name="Hook"
      description={
        <>
          You can also use the hook{" "}
          <Text code>
            useClickOut({"{"} onClickOut {"}"})
          </Text>{" "}
          to not add an extra wrapper element. In that case, you should apply
          the ref the hook returns to the element you want to fire the function
          when clicking out.
        </>
      }
      code={`<Box ref={ref as any}>Times Clicked Outside of this Text: {count}</Box>`}
    >
      <Box ref={ref as any}>Times Clicked Outside of this Text: {count}</Box>
    </Example>
  );
}

function useCounter(): [number, () => void] {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((c) => c + 1);
  }
  return [count, increment];
}
