import React from 'react';
import {
  Container, Box, TextField, Button, Grid, Link, Dialog, 
  DialogContent, DialogTitle, IconButton, Typography
} from "@mui/material";
import {
  CloseOutlined
} from '@mui/icons-material';
import { addWordState } from '../../states/WordState';
import { useRecoilState } from 'recoil';

export default function AddWord() {

  const [addWord, setAddWord] = useRecoilState(addWordState);

  const handleAddWord = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('email') && data.get('password')) {
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
  }

  const handleClose = () => {
    setAddWord(false);
  }

  return (
    <Dialog
      open={addWord}
    >          <DialogTitle>
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
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleAddWord} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="front"
            label="front"
            name="front"
            // autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="back"
            label="back"
            id="back"
            // autoComplete="current-password"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="tag"
            label="tag"
            id="tag"
            // autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {"Save"}
          </Button>

        </Box>
      </Box>
    </Container>
    </DialogContent>
    </Dialog>
  );
}