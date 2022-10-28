const Box = props => {
    const {color} = props;
    const style = {"backgroundColor": color,
                    "color": "white", 
                    "height": "50px",
                    "width": "50px",
                    "margin": "10px"}
    return (
        <p style={style}></p>
    )
}

export default Box;