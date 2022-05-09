import Head from "next/head";
import { Text } from "components";

export default function Home() {
  return (
    <>
      <Head>
        <title>🌿🫐 Juniper</title>
      </Head>

      <div>
        <Text h1>Juniper UI</Text>
        <Text bold>Currently In Development</Text>
        <Text p>
          A React UI component library focused on powerful components with
          simple styling; and ease of customization with CSS variables.
        </Text>
      </div>
    </>
  );
}
