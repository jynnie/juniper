import Head from "next/head";
import {
  Flex,
  Text,
  Heading,
  CopyToClipboardWrapper,
  Button,
} from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";
import { Clipboard } from "react-feather";

export default function CopyToClipboardPage() {
  return (
    <>
      <Head>
        <title>Copy to Clipboard | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Copy to Clipboard</Heading>
        <Heading h3 intent="secondary">
          Save values to clipboard on click
        </Heading>

        <Flex col gap={sp("xxl")}>
          <Example
            description={
              <>
                Wrap elements in a{" "}
                <Text code>{"<CopyToClipboardWrapper value={...}/>"}</Text> to
                copy the value when clicking on the wrapped elements.
              </>
            }
            code={`<CopyToClipboardWrapper value={"Hello"}>
  <Button icon={<Clipboard />}>Copy Hello</Button>
</CopyToClipboardWrapper>`}
          >
            <CopyToClipboardWrapper value={"Hello"}>
              <Button icon={<Clipboard />}>Copy Hello</Button>
            </CopyToClipboardWrapper>
          </Example>
        </Flex>
      </div>
    </>
  );
}
