import * as React from "react";

import { Layout, Button } from "antd";

import Group from "../base/Group";
import Text from "../base/Text";
import TextLink from "../base/TextLink";

const { Footer: AntdFooter } = Layout;

export default function Footer() {
  return (
    <AntdFooter style={{ textAlign: "center" }}>
      <Group justifyContent="space-between" alignItems="end">
        <Text scale="headline" weight="bold">
          Francisco.
        </Text>
        <Group gap={32}>
          <TextLink
            href="https://www.instagram.com/francistogram/"
            openInNewTab={true}
          >
            instagram
          </TextLink>
          <TextLink
            href="https://twitter.com/francistogram"
            openInNewTab={true}
          >
            twitter
          </TextLink>
          <TextLink
            href="https://www.linkedin.com/in/fdelgadoj/"
            openInNewTab={true}
          >
            linkedIn
          </TextLink>
        </Group>
      </Group>
    </AntdFooter>
  );
}
