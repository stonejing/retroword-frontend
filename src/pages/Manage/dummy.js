import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from "@mui/material/Box";
import { Button, Card, TextField } from '@mui/material';
import SignIn from './Auth/Login';
import AuthDialog from '../components/Auth/AuthDialog';
import { authIsAuthenticateState } from '../states/UserStates';
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

  console.log({authenticated: authenticated});

  const reset = () => {
    setVisib('visible')
    setAuthenticated(true);
  }

  const hide = () => {
    setVisib('hidden')
  }

  const next = () => {
    if (count < allWords.length - 1) {
      setCount(count + 1);
      setVisib('hidden');
    }
  }

  const prev = () => {
    if (count > 0) {
      setCount(count - 1);
      // setVisib('hidden');
    }
  }

  const handleClose = () => {
    setShowLogin(false);
    // setAuthenticated(false);
  }

  let postData = new FormData();
  postData.append("username", "test");
  postData.append("password", "test");

  const showRequestData = () => {
    axios.post('http://127.0.0.1:5000/api/add_user', postData, {
      auth: {
        username: 'stonejing',
        password: 'stonejing'
      }
    }).then((res) => {
      setReqData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let wordData = new FormData(e.currentTarget);
    console.log({
      vocabulary: wordData.get("vocabulary"),
      tag: wordData.get("tag")
    });
    if(wordData.get("vocabulary") && wordData.get("tag"))
    {
      // wordData.append("vocabulary", wordData.get("email"));
      // wordData.append("tag", wordData.get("password"));
      axios.post('http://127.0.0.1:5000/api/add_vocabulary', wordData, {
        auth: {
          username: 'stonejing',
          password: 'stonejing'
        }
      }).then((res) => {
        console.log(res.data);
        // setReqData(res.data.message);
      }).catch((err) => {
        // console.log(err);
      })
    }
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/all_vocabulary', {
      auth: {
        username: 'stonejing',
        password: 'stonejing'
      }
    }).then((res) => {
      console.log(res.data.data);
      const temp = res.data.data.map((item, index) =>
        <div key={index}> {item.word} {item.tag}</div>
      );
      setAllVocabulary(res.data.data);
      setAllWords(temp);
      setChangeState(changeState);

    }).catch((err) => {
      console.log(err);
    })
  }, [changeState])

  useEffect(() => {
    console.log("effect");
  }, [])

  return (
    <Box
      sx={{
        // display: "flex",
        alignItems: "center",
        justify: "center",
      }}
    >
      <Card
        sx={{
          textAlign: "center",
          width: "20em",
        }}
      >
        {allWords.length !== 0 && <div>
          {allVocabulary[count].word}
        </div>}

        {allWords.length !== 0 && <div style={{ visibility: visib }}>
          {allVocabulary[count].tag}
        </div>}
      </Card>

      <Box
        sx={{
          // display: "flex",
        }}
      >
        <div>
          <Button variant="contained" onClick={hide}>
            hide
          </Button>
          <Button variant="contained" onClick={reset}>
            reset
          </Button>
          <Button variant='contained' onClick={prev}>
            prev
          </Button>
          <Button variant="contained" onClick={next}>
            next
          </Button>
        </div>

        {/* <SignIn /> */}

        { authenticated ? <AuthDialog open={showLogin} handleClose={handleClose}/> : <></> }

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="vocabulary"
            label="vocabulary"
            name="vocabulary"
            // autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="tag"
            label="tag"
            type="tag"
            id="tag"
            // autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add vocabulary
          </Button>
        </Box>
        <div>
          {allWords}
        </div>
      </Box>
      </Box>
  )
}