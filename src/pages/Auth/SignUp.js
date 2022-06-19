import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { authActionState } from '../../states/UserStates';
import { useRecoilState } from 'recoil';


export default function SignUp() {
  const [authAction, setAuthAction] = useRecoilState(authActionState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('email') && data.get('password'))
    {
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
  };

  const changeToLogin= () => {
    setAuthAction("login");
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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

            {/* <Typography sx={{mt: '40px', fontWeight: 'medium'}} variant={"body1"}>
              {"Already have account "}
              <Link onClick={handleClick}>
                {"Log In"}
              </Link>
            </Typography> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <Link variant="body2" sx={{cursor: "pointer"}} onClick={changeToLogin}>
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>

            {/* <Typography sx={{mt: '40px', fontWeight: 'medium'}} variant={"body1"}>
                <Link sx={{ml: '2px', fontWeight: 'medium', cursor: "pointer"}}
                      onClick={changeToLogin}>
                    {"Already have an account? Login"}
                </Link>
            </Typography> */}

          </Box>
        </Box>
      </Container>
  );
}