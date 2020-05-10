import * as React from "react";

import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import Group from "../base/Group";
import Text from "../base/Text";
import TextLink from "../base/TextLink";

export default function SocialMedia() {
  return (
    <Group flexDirection="column" gap={16}>
      <TextLink
        scale="link"
        href="https://www.instagram.com/francistogram/"
        openInNewTab={true}
      >
        <InstagramOutlined />
      </TextLink>
      <TextLink
        scale="link"
        href="https://twitter.com/francistogram"
        openInNewTab={true}
      >
        <TwitterOutlined />
      </TextLink>
      <TextLink
        scale="link"
        href="https://www.linkedin.com/in/fdelgadoj/"
        openInNewTab={true}
      >
        <LinkedinOutlined />
      </TextLink>
    </Group>
  );
}
