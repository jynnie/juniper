import React from "react";
import { Box, Flex, Button, CopyToClipboardWrapper, Text } from "components";

export default function Playground() {
  return (
    <div>
      <CopyToClipboardWrapper value="text">Test</CopyToClipboardWrapper>
    </div>
  );
}
