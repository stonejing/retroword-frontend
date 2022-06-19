import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { authActionState } from '../../states/UserStates';
import { useSetRecoilState } from 'recoil';
import { useAuth } from '../../hooks/useAuth';


export default function Login() {
  const setAuthAction = useSetRecoilState(authActionState);

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if(data.get('email') && data.get('password'))
    {
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
    await login("");
  }

  const changeToSignUp = () => {
    setAuthAction("signup");
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {"Log In"}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link variant="body2" sx={{cursor: "pointer"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" sx={{cursor: "pointer"}} onClick={changeToSignUp}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
  );
}