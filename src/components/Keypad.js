// Code Keypad Component Here
import react from "react";

function Keypad (){
    function handleChange(event){
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={handleChange}></input>
    )
    }

    export default Keypad