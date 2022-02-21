import Head from "next/head";
import {
  Box,
  Flex,
  Divider,
  Grid,
  Text,
  Heading,
  CopyToClipboardWrapper,
} from "components";

const COLORS: { name: string; variable: string; color: string }[] = [
  { name: "--gray0", variable: "--gray0", color: "hsl(225, 0%, 100%)" },
  { name: "--gray1", variable: "--gray1", color: "hsl(225, 20%, 94%)" },
  { name: "--gray2", variable: "--gray2", color: "hsl(223, 19%, 85%)" },
  { name: "--gray3", variable: "--gray3", color: "hsl(221, 16%, 76%)" },
  { name: "--gray4", variable: "--gray4", color: "hsl(222, 12%, 61%)" },
  { name: "--gray5", variable: "--gray5", color: "hsl(222, 10%, 54%)" },
  { name: "--gray6", variable: "--gray6", color: "hsl(222, 18%, 33%)" },
  { name: "--gray7", variable: "--gray7", color: "hsl(222, 24%, 25%)" },
  { name: "--gray8", variable: "--gray8", color: "hsl(222, 38%, 17%)" },
  { name: "--gray9", variable: "--gray9", color: "hsl(0, 0%, 0%)" },

  {
    name: "--red-lighter",
    variable: "--red-lighter",
    color: "hsl(0, 96%, 89%)",
  },
  { name: "--red-light", variable: "--red-light", color: "hsl(0, 91%, 71%)" },
  { name: "--red", variable: "--red", color: "hsl(0, 84%, 60%)" },
  { name: "--red-dark", variable: "--red-dark", color: "hsl(0, 74%, 42%)" },
  { name: "--red-darker", variable: "--red-darker", color: "hsl(0, 63%, 31%)" },

  {
    name: "--orange-lighter",
    variable: "--orange-lighter",
    color: "hsl(32, 98%, 83%)",
  },
  {
    name: "--orange-light",
    variable: "--orange-light",
    color: "hsl(27, 93%, 63%)",
  },
  { name: "--orange", variable: "--orange", color: "hsl(25, 95%, 53%)" },
  {
    name: "--orange-dark",
    variable: "--orange-dark",
    color: "hsl(17, 88%, 40%)",
  },
  {
    name: "--orange-darker",
    variable: "--orange-darker",
    color: "hsl(15, 75%, 28%)",
  },

  {
    name: "--amber-lighter",
    variable: "--amber-lighter",
    color: "hsl(40, 82%, 85%)",
  },
  {
    name: "--amber-light",
    variable: "--amber-light",
    color: "hsl(37, 92%, 66%)",
  },
  { name: "--amber", variable: "--amber", color: "hsl(37, 91%, 55%)" },
  {
    name: "--amber-dark",
    variable: "--amber-dark",
    color: "hsl(29, 86%, 43%)",
  },
  {
    name: "--amber-darker",
    variable: "--amber-darker",
    color: "hsl(29, 100%, 21%)",
  },

  {
    name: "--yellow-lighter",
    variable: "--yellow-lighter",
    color: "hsl(55, 97%, 88%)",
  },
  {
    name: "--yellow-light",
    variable: "--yellow-light",
    color: "hsl(50, 98%, 64%)",
  },
  { name: "--yellow", variable: "--yellow", color: "hsl(49, 100%, 46%)" },
  {
    name: "--yellow-dark",
    variable: "--yellow-dark",
    color: "hsl(35, 92%, 33%)",
  },
  {
    name: "--yellow-darker",
    variable: "--yellow-darker",
    color: "hsl(28, 73%, 26%)",
  },

  {
    name: "--lime-lighter",
    variable: "--lime-lighter",
    color: "hsl(80, 89%, 89%)",
  },
  {
    name: "--lime-light",
    variable: "--lime-light",
    color: "hsl(82, 85%, 67%)",
  },
  { name: "--lime", variable: "--lime", color: "hsl(84, 81%, 44%)" },
  { name: "--lime-dark", variable: "--lime-dark", color: "hsl(86, 78%, 27%)" },
  {
    name: "--lime-darker",
    variable: "--lime-darker",
    color: "hsl(88, 61%, 20%)",
  },

  {
    name: "--green-lighter",
    variable: "--green-lighter",
    color: "hsl(149, 80%, 90%)",
  },
  {
    name: "--green-light",
    variable: "--green-light",
    color: "hsl(150, 67%, 62%)",
  },
  { name: "--green", variable: "--green", color: "hsl(156, 93%, 42%)" },
  {
    name: "--green-dark",
    variable: "--green-dark",
    color: "hsl(157, 93%, 32%)",
  },
  {
    name: "--green-darker",
    variable: "--green-darker",
    color: "hsl(157, 78%, 14%)",
  },

  {
    name: "--teal-lighter",
    variable: "--teal-lighter",
    color: "hsl(167, 85%, 89%)",
  },
  {
    name: "--teal-light",
    variable: "--teal-light",
    color: "hsl(171, 77%, 64%)",
  },
  { name: "--teal", variable: "--teal", color: "hsl(167, 61%, 51%)" },
  { name: "--teal-dark", variable: "--teal-dark", color: "hsl(167, 80%, 32%)" },
  {
    name: "--teal-darker",
    variable: "--teal-darker",
    color: "hsl(176, 61%, 19%)",
  },

  {
    name: "--blue-lighter",
    variable: "--blue-lighter",
    color: "hsl(204, 100%, 89%)",
  },
  {
    name: "--blue-light",
    variable: "--blue-light",
    color: "hsl(204, 94%, 67%)",
  },
  { name: "--blue", variable: "--blue", color: "hsl(204, 89%, 48%)" },
  { name: "--blue-dark", variable: "--blue-dark", color: "hsl(204, 94%, 33%)" },
  {
    name: "--blue-darker",
    variable: "--blue-darker",
    color: "hsl(205, 100%, 18%)",
  },

  {
    name: "--cobalt-lighter",
    variable: "--cobalt-lighter",
    color: "hsl(229, 100%, 90%)",
  },
  {
    name: "--cobalt-light",
    variable: "--cobalt-light",
    color: "hsl(229, 100%, 74%)",
  },
  { name: "--cobalt", variable: "--cobalt", color: "hsl(229, 100%, 66%)" },
  {
    name: "--cobalt-dark",
    variable: "--cobalt-dark",
    color: "hsl(229, 67%, 40%)",
  },
  {
    name: "--cobalt-darker",
    variable: "--cobalt-darker",
    color: "hsl(229, 64%, 33%)",
  },

  {
    name: "--purple-lighter",
    variable: "--purple-lighter",
    color: "hsl(269, 100%, 92%)",
  },
  {
    name: "--purple-light",
    variable: "--purple-light",
    color: "hsl(270, 65%, 69%)",
  },
  { name: "--purple", variable: "--purple", color: "hsl(270, 70%, 60%)" },
  {
    name: "--purple-dark",
    variable: "--purple-dark",
    color: "hsl(270, 71%, 32%)",
  },
  {
    name: "--purple-darker",
    variable: "--purple-darker",
    color: "hsl(270, 76%, 21%)",
  },

  {
    name: "--magenta-lighter",
    variable: "--magenta-lighter",
    color: "hsl(290, 76%, 92%)",
  },
  {
    name: "--magenta-light",
    variable: "--magenta-light",
    color: "hsl(290, 83%, 70%)",
  },
  { name: "--magenta", variable: "--magenta", color: "hsl(290, 84%, 61%)" },
  {
    name: "--magenta-dark",
    variable: "--magenta-dark",
    color: "hsl(290, 79%, 36%)",
  },
  {
    name: "--magenta-darker",
    variable: "--magenta-darker",
    color: "hsl(290, 75%, 25%)",
  },

  {
    name: "--pink-lighter",
    variable: "--pink-lighter",
    color: "hsl(326, 100%, 92%)",
  },
  {
    name: "--pink-light",
    variable: "--pink-light",
    color: "hsl(337, 68%, 69%)",
  },
  { name: "--pink", variable: "--pink", color: "hsl(337, 70%, 60%)" },
  { name: "--pink-dark", variable: "--pink-dark", color: "hsl(335, 78%, 42%)" },
  {
    name: "--pink-darker",
    variable: "--pink-darker",
    color: "hsl(337, 65%, 26%)",
  },
];

export default function Color() {
  return (
    <>
      <Head>
        <title>🌿🍇 | Color</title>
      </Head>

      <div>
        <Heading h1>Color</Heading>
        <Heading h2 secondary>
          Gallery of colors used in Juniper
        </Heading>
        <Text>
          These can be configured or overwritten in css. See{" "}
          <Text code>`config.scss`</Text> for example.
        </Text>

        <Divider size="xxl" />

        <Grid colNum={5} columnGap="var(--sp-sm)" rowGap="var(--sp-md)">
          {COLORS.map((c) => (
            <Flex col key={c.variable}>
              <CopyToClipboardWrapper value={`var(${c.variable})`}>
                <Box
                  backgroundColor={`var(${c.variable})`}
                  height="var(--sp-x3)"
                  borderRadius="var(--sp-rd)"
                />
                <Flex justify="space-between">
                  <Text small>{c.name}</Text>
                </Flex>
              </CopyToClipboardWrapper>
            </Flex>
          ))}
        </Grid>
      </div>
    </>
  );
}
