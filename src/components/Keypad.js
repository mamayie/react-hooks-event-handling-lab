// Code Keypad Component Here

import React from "react";
function Keypad (){
    function handlePasswords(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input id="password" type="password" placeholder="Enter password" onChange={handlePasswords} />
        </div>
    )
}
export default Keypad;