import React, { useState } from "react";
import Box, { BoxProps } from "ui-box";
import cn from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ChevronDown, Clipboard } from "react-feather";

import style from "../styles/example.module.css";
import { Flex, Text, CopyToClipboardWrapper } from "../../package/components";
import { sp } from "../../package/utils";

interface ExampleProps extends BoxProps<React.ElementType> {
  name?: string;
  code?: string;
  description?: string;
}

export function Example({
  className,
  name,
  description,
  code,
  children,
  ...props
}: ExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <Box className={cn(className, style.exampleContainer)} {...props}>
      {!!name && <Text h2>{name}</Text>}
      {!!description && <Text p>{description}</Text>}
      <Box className={style.example}>
        <Box className={style.preview}>{children}</Box>
        <Flex
          className={style.codeToggle}
          align="center"
          justify="space-between"
        >
          <Flex
            align="center"
            gap={sp("lg")}
            flexGrow={1}
            onClick={() => setShowCode(!showCode)}
          >
            <ChevronDown
              className={cn(`jnpr-chevron-${showCode ? "down" : "right"}`)}
              size="var(--sp-lg)"
            />
            <Text h5 intent="secondary" margin={0}>
              Code
            </Text>
          </Flex>

          <CopyToClipboardWrapper value={code}>
            <Flex className={style.copy} center>
              <Clipboard size={"var(--font-size-ml)"} />
            </Flex>
          </CopyToClipboardWrapper>
        </Flex>
        {showCode && (
          <SyntaxHighlighter
            className={style.code}
            language="jsx"
            style={codeStyle}
            customStyle={{ padding: "f", margin: "0px" }}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </Box>
    </Box>
  );
}
