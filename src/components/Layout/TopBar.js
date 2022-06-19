
import React from 'react';
import { Box, Toolbar, styled, Stack, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import AccountMenu from '../Auth/AccountMenu';
import { authIsAuthenticateState } from '../../states/UserStates';
import { addWordState } from '../../states/WordState';
import { useRecoilValue, useRecoilState } from 'recoil';
import AuthDialog from '../Auth/AuthDialog';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import AddWord from '../../pages/WordManage/AddWord';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
      transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
      }),
  }),
}));

export default function TopBar()
{
  const authenticated = useRecoilValue(authIsAuthenticateState);
  const [addWord, setAddWord] = useRecoilState(addWordState);

  const handleAddWord = () => {
    console.log(addWord);
    setAddWord(true);
  }

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(20px)",
          background: grey[100],
          transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        elevation={0}
        color="inherit"
      >
        <Toolbar>
          <Box display={'flex'} ml={"auto"}>
            <Stack direction={'row'} spacing={1} width={'100%'}>
              <Button onClick={handleAddWord}>
                Add
              </Button>
              <AccountMenu />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      { authenticated ? <></> :  <AuthDialog />}
      { addWord ? <AddWord /> : <></> }
    </>
  )
}