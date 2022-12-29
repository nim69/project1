import { getElementError } from '@testing-library/react';
import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick= ()=>{
        let newText =  text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success");
    }
    const handleCapClick = ()=> {
        const arr = text.split(" ");
        for (var i = 0 ; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setText(str2)
    }
    const handleClrClick= ()=>{
        setText("");
    }
    const handleLoClick= ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const handleCopy=()=>{
        var text = document.getElementById("copytext");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy successfully","success");
    }  
    const handleReClick = ()=>{
        let splitString = text.split("");
        let reverseArray = splitString.reverse();  
        let joinArray = reverseArray.join("");
        setText(joinArray)
    }
    const handleFindEmail = () =>{
        let reg = /[a-z0-9]+@[a-z]+\.[a-z]+/gm;
        let n = text.match(reg);
        setText(n[0]+" ");
      }
      
    const handle_download_Txt_File = () => {
        setText("Downloadd!!!!!");
        const element = document.createElement("a");
        const file = new Blob([Text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "File.txt";
        document.body.appendChild(element);
        element.click();
    }
      const handleHtml = () => {
        console.log(text);
        let newText = text.replace(/<\/?[^>]+(>|$)/g, "");
        setText(newText);
      };

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Message here'); 
    return (
        <div className='col-md-12'> 
            <div className="mb-3">
                <label for="fortext"  className="form-label">{props.message}</label>
                <textarea value={text} onChange={handleOnChange} className="form-control" id="copytext" rows="8"></textarea>
            </div>
           <div className='container'>
           <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-warning  mx-2" onClick={handleLoClick}>Covert to LowerCase </button>
           <button className="btn btn-danger  mx-2" onClick={handleClrClick}>Clear Text</button>
           <button className="btn btn-info  mx-2" onClick={handleCopy}>CopyText</button>
           <button className="btn btn-secondary  mx-2" onClick={handleFindEmail}>Find Email</button>
           <button className="btn btn-primary  mx-2" onClick={handleCapClick}>Capital Letter</button>
           <button className="btn btn-info  mx-2" onClick={handleReClick}>Reverse Text</button>
           <button className="btn btn-primary  my-2" onClick={handleHtml}>Html to Text</button>
           <button className="btn btn-danger  my-2" onClick={handle_download_Txt_File}>Download</button>
 

           </div>
           <div className="container card ">
            <p className='panel-heading'> There are {(text.length)===0 ? 0 : text.trim().split(" ").length} words and {text.length} characters and {text.split(" ").length - 1} whitespaces.      <span className='bg-warning badge'> {text.split(" ").length - 1}</span> Spaces  <span  className='bg-info badge'> It will take <b><i>{0.008 * ((text.length)===0 ? 0 : text.trim().split(" ").length)}</i></b> minutes to read </span>  </p>
            <h2>Preview</h2>
            <p className='text-justify'>{text}</p>
           </div>
        </div>
    )
}
