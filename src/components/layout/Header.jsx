import * as React from "react";
import { navigate } from "gatsby";

import Group from "../base/Group";
import Text from "../base/Text";
import TextLink from "../base/TextLink";

export default function Header() {
  return (
    <Group justifyContent="space-between" alignItems="end">
      <Text scale="title" weight="bold">
        Francisco.
      </Text>
      <Group gap={32}>
        <TextLink
          scale="link"
          onClick={() => navigate("/blog")}
          openInNewTab={true}
        >
          blog
        </TextLink>
        <TextLink
          scale="link"
          onClick={() => navigate("/blog")}
          openInNewTab={true}
        >
          projects
        </TextLink>
        <TextLink
          scale="link"
          onClick={() => navigate("/blog")}
          openInNewTab={true}
        >
          resume
        </TextLink>
      </Group>
    </Group>
  );
}
