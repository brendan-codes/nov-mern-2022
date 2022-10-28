import React, {useState} from 'react';

const PersonCard = props => {
    const [count, setCount] = useState(0);
    const {name, email} = props;

    const countHandler = (e) => {
        let newCount = count + 1;
        setCount(newCount);
        console.log(newCount);
    }
    return (
        <>
            <h1>Hello my name is {addTitle(name)} and my email is {email}</h1>
            <p>The count is {count}</p>
            <button onClick={countHandler}>Click me!</button>
        </>
    );
}

const addTitle = string => `Mr. ${string}`;
    
export default PersonCard;