import { Avatar, Button, MenuItem } from '@mui/material';
import React from 'react';
import { 
        authDialogState, 
        authAccessTokenState, 
        authIsAuthenticateState, 
        authReturnDataState
      } from '../../states/UserStates';
import { useRecoilState, useSetRecoilState } from 'recoil'; 

const AccountMenu = () => {
  const setAuthDialog = useSetRecoilState(authDialogState);
  const setAuthAccessToken = useSetRecoilState(authAccessTokenState);
  const [authIsAuthenticate, setAuthIsAuthenticate] = useRecoilState(authIsAuthenticateState);
  const setAuthReturnData = useSetRecoilState(authReturnDataState);

  const handleLogout = () => {
    setAuthAccessToken('');
    setAuthReturnData({});
    setAuthIsAuthenticate(false);
  }

  return (
    <>
      { authIsAuthenticate ? (
        <Button onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button size={"small"} color={'inherit'} variant={'contained'} onClick={() => setAuthDialog(true)}
                endIcon={<Avatar sx={{width: 24, height: 24, color: 'inherit'}}/>}>
          Login
        </Button>
      )}
    </>
  )
}

export default AccountMenu;