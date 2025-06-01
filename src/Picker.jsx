import React, {useState} from "react"
import './Picker.css'
function Picker(){
    const [color ,setcolor]=useState("#FFFFFF");

    function handlecolorchange(event){
        setcolor(event.target.value);
    }

    return(
        <>
        <div className="container">
            <h2>COLOR SELECTOR</h2>
            <div className="colorsel" style={{backgroundColor:color}}>
                <p>SELECTED COLOR: {color}</p>
            </div>
            <div>
                <label>SELECT COLOR: </label>
                <input type="color" onChange={handlecolorchange}/>
            </div>
        </div>
        </>
    )


}
export default Picker