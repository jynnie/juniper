import Head from "next/head";
import { Flex, Text, Heading, Button, ToastContainer, toast } from "components";
import { sp } from "utils";

import { Example } from "../../components/Example";

export default function ToastPage() {
  return (
    <>
      <Head>
        <title>Toast | 🌿🫐</title>
      </Head>

      <div>
        <Heading h1>Toast</Heading>
        <Heading h3 intent="secondary">
          Display messages or notifications globally
        </Heading>
        <Flex col gap={sp("xxl")}>
          <Example
            description={
              <>
                Juniper re-distributes{" "}
                <Text
                  a
                  href="https://github.com/fkhadra/react-toastify"
                  target="_blank"
                  rel="noopener"
                >
                  react-toastify
                </Text>{" "}
                with some defaults. Check out their wonderful work!
              </>
            }
            code={`<Button 
  onClick={() => {
    toast("What's up, boss?");
  }}
>
  Show Toast
</Button>
<ToastContainer />`}
          >
            <Button
              onClick={() => {
                toast("What's up, boss?");
              }}
            >
              Show Toast
            </Button>
            <ToastContainer />
          </Example>
        </Flex>
      </div>
    </>
  );
}
