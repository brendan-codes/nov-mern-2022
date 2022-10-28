import React,  { useState } from 'react';

const Input = props => {
    const [color, setColor] = useState("");

    const {colors, setColors} = props;
    // const [colors, setColors] = useState(["blue", "red"]);

    const addToColors = () => {
        const newColors = [...colors];
        newColors.push(color);
        setColors(newColors);
        console.log(colors);
        setColor("");
    }

    return (
        <div>
            <h3>This is now input!</h3>
            <input 
                value={color}
                onChange={ e => setColor(e.target.value) } 
                type="text" 
            /> 
            <button onClick={addToColors}>Accept!</button>
            <p>Enter your favorite color!</p>
            
        </div>
    )
}

export default Input;