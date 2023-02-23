import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
;    }
    const handleClearClick = () => {
        console.log("Cleared");
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!","success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("Copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces = () => {
        console.log("Extra space removed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }

    const [text, setText] = useState('Enter text here');

    // text = "new test"; //wrong way to change the stae
    // setText("new test"); //right way to change the stae
    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0 ? text : "Enter something in the above textbox to preview it"}</p>
            </div>

        </>
    )
}
