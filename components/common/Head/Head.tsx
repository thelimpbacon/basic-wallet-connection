import React from "react";
import NextHead from "next/head";

const Head = (): JSX.Element => {
  return (
    <NextHead>
      <title>Basic wallet connection</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </NextHead>
  );
};

export default Head;
