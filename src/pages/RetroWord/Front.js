import React from 'react';
import { Card } from '@mui/material';


export default function Front(props)
{
  const { front } = props;

  return (
    <Card
      sx={{
        textAlign: "center",
        width: "20em",
        mt: "5em",
      }}
    >
      {/* THIS IS A TEST FOR YOU.
      <br></br>
      I LOVE YOU FOREVER.
      <br></br>
      I DO NOT LIKE YOU.
      <br></br>
      GOOD BYE.
      <br></br> */}
      { front }
    </Card>
  )
}