// import "juniper-ui/dist/style.css";
import "styles/index.scss";
import styles from "./index.module.css";

import { Flex, Text, Heading, Paragraph, Link, Codeblock } from "components";

function MyApp({ Component, pageProps }) {
  return (
    <Flex className={styles.main}>
      <div className={styles.sidenav}>
        <Text h3>Juniper UI</Text>
      </div>

      <main className={styles.content}>
        <Component {...pageProps} />
      </main>
    </Flex>
  );
}

export default MyApp;
