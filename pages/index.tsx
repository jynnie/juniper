import Head from "next/head";
import { Flex, Text, Heading, Paragraph, Link, Codeblock } from "components";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>🌿🍇 | Juniper</title>
      </Head>

      <div>
        <Text h1>Juniper UI</Text>
        <Text bold caption>
          Currently In Development
        </Text>
        <Text p>
          A React UI component library focused on powerful components with
          simple styling; and ease of customization with CSS variables.
        </Text>
      </div>
    </>
  );
}
