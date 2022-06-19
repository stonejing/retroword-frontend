import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import Auth from '../../pages/Auth/Auth';
import { CloseOutlined } from '@mui/icons-material';
import { authDialogState, authIsAuthenticateState } from '../../states/UserStates';


export default function AuthDialog() {

  const [authDialog, setAuthDialog] = useRecoilState(authDialogState);
  const [authIsAuthenticate, setAuthIsAuthenticate] = useRecoilState(authIsAuthenticateState);

  const handleClose = () => {
    setAuthDialog(false);
  }

  return (
    <>
      <Dialog
        open={authDialog}
      >
        <Box pt={"60px"} px={"50px"} pb={"20px"}>

          <DialogTitle>
            <Typography variant={"h4"} component={"p"} sx={{ fontWeight: "bold" }}>
              Welcome to hlab
            </Typography>

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseOutlined />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Auth />
          </DialogContent>
        </Box>
      </Dialog>
    </>
  )
}