import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShowOne = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        _id: "",
        title: "",
        artist: ""
    });
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");

    const formHandler = () => {
        const updatedSong = {
            title: title,
            artist: artist
        }

        editOneSongApi(updatedSong);
    }

    const editOneSongApi = (song) => {
        axios.put(`http://localhost:9001/api/songs/${id}`, song)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:9001/api/songs/${id}`)
            .then(res => {
                console.log(res.data.oneSongById);
                setSong(res.data.oneSongById);
                setArtist(res.data.oneSongById.artist);
                setTitle(res.data.oneSongById.title);
            })
            .catch(err => {
                console.log(err);
            })
    },[])



    return (
        <>
            <h1>This is ShowOne: { id }</h1>
            <div>
                <p>Title: {song.title}</p>
                <p>Artist: {song.artist}</p>
            </div>
            <div>
                <input 
                    type="text"  
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="text"  
                    value={artist} 
                    onChange={e => setArtist(e.target.value)}
                />
                <button onClick={formHandler}>Edit Song!</button>
            </div>
        </>
    )
}

export default ShowOne;