import React from "react";

import { Paragraph } from "./Paragraph";
import { BasicText } from "./BasicText";
import { Heading } from "./Heading";
import { Link } from "./Link";
import { Codeblock } from "./Codeblock";

import type { TextProps } from "./Text.model";

export function Text({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a = false,
  p = false,
  codeblock = false,
  ...props
}: TextProps) {
  const isHeading = [h1, h2, h3, h4, h5, h6].some((h) => h === true);
  if (isHeading) return <Heading {...{ h1, h2, h3, h4, h5, h6 }} {...props} />;

  if (p) return <Paragraph {...props} />;

  if (a) return <Link {...props} />;

  if (codeblock) return <Codeblock {...props} />;

  return <BasicText {...props} />;
}

export default Text;
