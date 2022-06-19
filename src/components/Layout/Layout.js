import React from 'react';
import {
  Box, CssBaseline, styled, Container, 
  Typography, Divider, Toolbar
} from '@mui/material';
import TopBar from './TopBar';
import RetroWord from '../../pages/RetroWord';

const sideBarWidth = 240;

const MainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
}) (({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${sideBarWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Layout = () => {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar/>
        <MainContent open={true} sx={{ maxWidth: '100vw' }}>
          <Box sx={{ overflow: "hidden", mt: 1 }}>
            {/* <Outlet /> */}
            <Container maxWidth={"xl"} sx={{ my: 2 }}>
              <RetroWord />
            </Container>
          </Box>
        </MainContent>
      </Box>
    </Box>
  )
}

export default Layout;
