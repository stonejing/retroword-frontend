import React from "react";
import { Box, Button } from "@mui/material";

export default function MemoryOption(props)
{
  const { handleRemember, handleForget } = props;
  return (
    <Box>
      <Button onClick={ handleRemember }>
        remember
      </Button>
      <Button>
        not sure
      </Button>
      <Button onClick= { handleForget }>
        forget
      </Button>
    </Box> 
  )
}