import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    const [sundaes, setSundaes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/sundae")
            .then(res => {
                console.log(res);
                setSundaes(res.data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1>Hello Main</h1>
            <Link to="/new">Order a new Sundae</Link>
            {
                sundaes.map((sundae, key) => 
                    <ul key={key}>
                        <li>flavor: <Link to={`/show/${sundae._id}`}>{sundae.flavor}</Link></li>
                        <li>nuts: {sundae.nuts ? "yes" : "no"}</li>
                        <li>coneType: {sundae.coneType}</li>
                        <li>scoops: {sundae.scoops}</li>
                    </ul>
                )
            }
        </>
    )
}

export default Main;