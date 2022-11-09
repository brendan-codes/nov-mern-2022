import {Link, useNavigate, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';


const Show = () => {
    const {id} = useParams();
    const [sundae, setSundae] = useState({})
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/sundae/${id}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/sundae/${id}`)
            .then(res => {
                console.log(res);
                setSundae(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <h1>Hello Show</h1>
            {
                loaded && <ul>
                    <li>flavor: {sundae.flavor}</li>
                    <li>nuts: {sundae.nuts ? "yes" : "no"}</li>
                    <li>coneType: {sundae.coneType}</li>
                    <li>scoops: {sundae.scoops}</li>
                    <li>createdAt: {new Date(sundae.createdAt).toDateString()}</li>
                    <li><button onClick={deleteHandler}>Delete this order!!!</button></li>
                </ul>
            }
        </>
    )
}

export default Show;