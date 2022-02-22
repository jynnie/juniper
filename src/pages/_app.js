// import "juniper-ui/dist/style.css";
import "styles/index.scss";
import styles from "../styles/index.module.css";

import { Flex } from "components";
import { SideNav } from "../components/SideNav";

function MyApp({ Component, pageProps }) {
  return (
    <Flex className={styles.main}>
      <SideNav />

      <main className={styles.content}>
        <Component {...pageProps} />
      </main>
    </Flex>
  );
}

export default MyApp;
