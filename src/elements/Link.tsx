import React from "react";
import { Link as RRLink, LinkProps } from "react-router-dom";
import { Typography } from "antd";

const Link = (props: LinkProps) => {
  return <RRLink component={Typography.Link} {...props} />;
};

export default Link;
