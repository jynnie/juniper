import React from "react";
import { Box, Flex, Button, CopyToClipboardWrapper, Text } from "components";
import Toast from "components/Toast/Toast";

export default function Playground() {
  return (
    <div>
      <CopyToClipboardWrapper value="text">Test</CopyToClipboardWrapper>
    </div>
  );
}
