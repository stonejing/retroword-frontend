import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mockData = [
  {
    vo: "tt1",
    ex: "this is a test1",
  },
  {
    vo: "tt2",
    ex: "this is a test2",
  },
  {
    vo: "tt3",
    ex: "this is a test3",
  }
];

export default function RetroWord()
{
  const [visib, setVisib] = useState('hidden')
  const [count, setCount] = useState(0);
  const [reqData, setReqData] = useState('null');
  const [word, setWord] = useState('');
  const [tag, setTag] = useState('');
  const [allWords, setAllWords] = useState([]);
  const [changeState, setChangeState] = useState(true);
  const [allVocabulary, setAllVocabulary] = useState();

  const reset = () => {
    setVisib('visible')
  }

  const hide = () => {
    setVisib('hidden')
  }

  const next = () => {
    if(count < allWords.length - 1)
    {
      setCount(count + 1);
      // setVisib('hidden');
    }
  }

  const prev = () => {
    if(count > 0)
    {
      setCount(count - 1);
      // setVisib('hidden');
    }
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

  const handleWordChange = e => {
    e.preventDefault();
    setWord(e.target.value);
  }

  const handleTagChange = e => {
    e.preventDefault();
    setTag(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(word);
    console.log(tag);
    e.preventDefault();
    let wordData = new FormData();
    wordData.append("vocabulary", word);
    wordData.append("tag", tag);
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
    <div>
      {allWords.length !== 0 && <div>
        { allVocabulary[count].word }
      </div>}

      {allWords.length !== 0 && <div style={{visibility: visib}}>
        { allVocabulary[count].tag }
      </div> }
      <div>
        { reqData }
      </div>

      <div>
        <button onClick={hide}>
          hide
        </button>
        <button onClick={reset}>
          reset
        </button>
        <button onClick={prev}>
          prev
        </button>
        <button onClick={next}>
          next
        </button>
        <button onClick={showRequestData}>
          show
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              vocabulary:
              <input type="text" value={word} onChange={handleWordChange} />
            </label>
          </div>
          <div>
            <label>
              tag:
              <input type="text" value={tag} onChange={handleTagChange} />
            </label>       
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>
        {allWords}
      </div>
    </div>
  )
}