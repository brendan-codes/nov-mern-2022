import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = props => {


    return (
        <>
            <h1>Hello I am Home</h1>
            <Link to={"/about"}>Go to about!</Link>
        </>
    )
}

export default Home;