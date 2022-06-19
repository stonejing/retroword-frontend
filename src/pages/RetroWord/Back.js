import React from 'react';
import { Card } from "@mui/material";


export default function Back(props) {
  const { back } = props;

  return (
    <Card
      sx={{
        textAlign: "center",
        width: "20em",
        mt: "5em",
        color: "#ff0000",
      }}
    >
      {/* THIS IS NOT A GOOD ANSWER. */}
      {/* <div color="#FF0000"> */}
        { back }
      {/* </div> */}
    </Card>
  )
}