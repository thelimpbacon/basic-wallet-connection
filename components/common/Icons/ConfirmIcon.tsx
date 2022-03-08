import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import CircularProgress, { circularProgressClasses } from "@mui/material/CircularProgress";
import { DoubleArrow } from "@components/common";

const SIZE = 56;
const THICKNESS = 3;

const Progress = (): JSX.Element => {
  return (
    <Fragment>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#FFF",
          opacity: 0.2,
        }}
        size={SIZE}
        thickness={THICKNESS}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        value={75}
        disableShrink
        sx={{
          color: (theme) => theme.palette.mint.main,
          animationDuration: "1550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
            strokeDasharray: "128px", //from browser inspection
            strokeDashoffset: "32px", //from browser inspection
          },
        }}
        size={SIZE}
        thickness={THICKNESS}
      />
    </Fragment>
  );
};

const ConfirmIcon = (): JSX.Element => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Progress />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DoubleArrow />
      </Box>
    </Box>
  );
};

export default ConfirmIcon;
