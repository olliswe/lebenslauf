import React from "react";
import { Chip as MuiChip } from "@material-ui/core";

const Chip = ({ fontSize, ...rest }: any) => {
  return (
    <MuiChip
      {...rest}
      variant={"outlined"}
      size={"medium"}
      style={{ fontSize: fontSize || "1rem", fontFamily: "inherit" }}
    />
  );
};

export default Chip;
