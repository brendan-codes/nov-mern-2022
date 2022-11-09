import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);
  
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
  
    const formHandler = () => {
      const newSong = {
        artist: artist,
        title: title
      }
  
      newSongApi(newSong);
      setArtist("");
      setTitle("");
    }

    const deleteHandler = (id) => {
        deleteSongApi(id);
    }

    const deleteSongApi = (id) => {
        axios.delete(`http://localhost:9001/api/songs/${id}`)
            .then(res => {
                console.log(res);
                removeSongFromSongs(id);
            })
            .catch(err => {
                console.log(err);
            })
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

    const removeSongFromSongs = (id) => {
        setSongs(songs.filter(song => song._id !== id))
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
            <h1>This is Main</h1>
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
                        <p>Title: <Link to={`/song/${song._id}`}>{song.title}</Link></p>
                        <p>By: {song.artist}</p>
                        <button onClick={e => deleteHandler(song._id)}>Delete this song!</button>
                        <hr />
                    </div>
                )
            }
        </>
    )
}

export default Main;