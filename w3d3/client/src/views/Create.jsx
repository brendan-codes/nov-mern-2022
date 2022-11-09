import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
const Create = () => {
    // state variables for the form
    const [flavor, setFlavor] = useState("");
    const [scoops, setScoops] = useState(0);
    const [coneType, setConeType] = useState("Sugar Cone");
    const [nuts, setNuts] = useState(false);

    const [error, setError] = useState("");

    const navigate = useNavigate();

    // form handler
    const formHandler = () => {
        const newSundae = {flavor, scoops, coneType, nuts};

        createApi(newSundae);
    }

    // axios call post /api/sundae
    const createApi = (sundae) => {
        axios.post("http://localhost:8000/api/sundae", sundae)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data.message);
            })

    }
    // navigate
    return (
        <>
            <h1>Hello Create</h1>
            <Link to="/">Go home!</Link>

            <div>
                <h3 style={{"color": "red"}}>{error}</h3>
                <p>State your flavor: {flavor}</p>
                <input type="text" value={flavor} onChange={e => setFlavor(e.target.value)}/>
                <p>How many scoops? {scoops} </p>
                <input type="number" value={scoops} onChange={e => setScoops(e.target.value)}/>
                <p>Do you want nuts?: {nuts ? "true" : "false"}</p>
                <input type="checkbox" checked={nuts} onChange={e => setNuts(e.target.checked)}/>
                <p>Select your cone?: {coneType}</p>
                <select value={coneType} onChange={e => setConeType(e.target.value)}>
                    <option value="Sugar Cone">Sugar Cone</option>
                    <option value="Waffle Cone">Waffle Cone</option>
                    <option value="Cup">Cup</option>
                </select>
                <p></p>
                <button onClick={formHandler}>Order a new Sundae</button>
            </div>
        </>
    )
}

export default Create;