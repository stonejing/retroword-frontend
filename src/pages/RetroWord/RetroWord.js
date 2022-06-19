import React, { useState, useEffect } from 'react';
import { Box, Divider, Stack } from "@mui/material";

import { Button, Card, TextField, BasePopupButton, MenuItem } from '@mui/material';
import SignIn from '../Auth/Login';
import AuthDialog from '../../components/Auth/AuthDialog';
import { authDialogState, authIsAuthenticateState } from '../../states/UserStates';
import { useRecoilState } from 'recoil';
import Front from './Front';
import Back from './Back';
import MemoryOption from './MemoryOption';
import { MockWord } from './MockData';

export default function RetroWord() {
  const [show, setShow] = useState(true)
  const [index, setIndex] = useState(0);

  const handleShow = () => {
    setShow(false);
  }

  const handleRemember = () => {
    if(index < MockWord.length - 1 )
    {
      setIndex(index + 1);
      setShow(true);
    }
    else
    {
      alert("final word");
    }
  }

  const handleForget = () => {
    if( index > 0)
    {
      setIndex(index - 1);
      setShow(true);
    } 
    else 
    {
      alert("first word");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justify: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Stack spaceing={4}>

        <Front front={MockWord[index].front}/>

        <Divider />

        { show ? (
          <>
            <Back back={"click to show the answer"}/>
            <Button onClick={handleShow}> Show </Button> 
          </>
        ) : (
          <>
            <Back back={ MockWord[index].back }/>
            <MemoryOption handleRemember={handleRemember} handleForget={handleForget}/>
          </>
        )}

      </Stack>
    </Box>
  )
}