import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Stack } from "@mui/material";

import { Button, Card, TextField, BasePopupButton, MenuItem } from '@mui/material';
import SignIn from './Auth/Login';
import AuthDialog from '../components/Auth/AuthDialog';
import { authDialogState, authIsAuthenticateState } from '../states/UserStates';
import { useRecoilState } from 'recoil';

export default function RetroWord() {
  const [visib, setVisib] = useState('hidden')
  const [count, setCount] = useState(0);
  const [reqData, setReqData] = useState('null');
  const [word, setWord] = useState('');
  const [tag, setTag] = useState('');
  const [allWords, setAllWords] = useState([]);
  const [changeState, setChangeState] = useState(true);
  const [allVocabulary, setAllVocabulary] = useState();
  const [showLogin, setShowLogin] = useState(false);

  const [authenticated, setAuthenticated] = useRecoilState(authIsAuthenticateState);
  const [authDialog, setAuthDialog] = useRecoilState(authDialogState);

  const handleClose = () => {
    setAuthDialog(false);
  }

  const showLoginForm = () => {
    setAuthDialog(true);
  }

  const handleLogout = () => {
    setAuthenticated(false);
    setAuthDialog(false);
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
      <Card
        sx={{
          textAlign: "center",
          width: "20em",
          mt: "5em",
        }}
      >
        THIS IS A TEST FOR YOU.
        <br></br>
        I LOVE YOU FOREVER.
        <br></br>
        I DO NOT LIKE YOU.
        <br></br>
        GOOD BYE.
      </Card>
      <Card
        sx={{
          textAlign: "center",
          width: "20em",
          mt: "5em"
        }}
      >
        THIS IS NOT A GOOD ANSWER.
      </Card>
      <Box>
      <Button>
        remember
      </Button>
      <Button>
        not sure
      </Button>
      <Button>
        forget
      </Button>
      </Box> 
      </Stack>
    </Box>
  )
}