import logo from './logo.svg';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const formHandler = () => {
    const newSong = {
      artist: artist,
      title: title
    }
    // if()?
    newSongApi(newSong);
    setArtist("");
    setTitle("");
  }

  const newSongApi = (song) => {
    axios.post("http://localhost:9001/api/songs", song)
      .then(res => {
        console.log(res.data.newSong);
        addSongToSongs(res.data.newSong);
      })
      .catch(err => console.log(err))
  }

  const addSongToSongs = (song) => {
    setSongs([...songs, song]);
  }

  useEffect(() => {
    axios.get("http://localhost:9001/api/songs")
      .then(data => {
        console.log(data.data);
        setSongs(data.data);
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Hello world!</h1>
      <div>
        {artist}
        <br />
        {title}
        <br />
        Title <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
        Artist <input 
          type="text" 
          value={artist} 
          onChange={e => setArtist(e.target.value)}
        />
        <button onClick={formHandler}>Add Song!</button>
      </div>
      <hr />
      { loaded && songs.map((song, key) => 
        <div key={key}>
          <p>Title: {song.title}</p>
          <p>By: {song.artist}</p>
          <hr />
        </div>
      )
      }
    </>
  );
}

export default App;
