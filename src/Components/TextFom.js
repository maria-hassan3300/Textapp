import React from 'react'
import { useState } from 'react'



export default function TextFom(props) {
    const [text, setText] = useState("Enter text here");
     
    
     const onChangeText=(event)=>{
        setText(event.target.value) ;
     }

     const changeUpperText=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text is  converted to Uppercase', 'success');
       }

     const changeLowerText=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text is converted to lowercase', 'success');
       }
       const clearText=()=>{
        let newText = " ";
        setText(newText);
        props.showAlert('Text is cleared', 'success');
       }
      
       const reverseText = () => {
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);
      };
        const copyText = ()=>{
            let text = document.getElementById("Box");
              text.select();
             navigator.clipboard.writeText(text.value);
             props.showAlert('Text is copied in clipboard', 'success');
        }
        const removeSpace = ()=>{
            let newText = text.split(/[ ]+/);
             setText(newText.join(' '));
             props.showAlert('Removed Extra spaces', 'success');
        }
      
      
  return (
    <>
    <div className="contanier" style= {{ color : props.changeMode === 'dark'? 'white': 'Black' }}> 
        <h1 style= {{ color : props.changeMode === 'dark'? 'white': 'black' }}>{props.tagline} </h1>
     <div className="my-3">
     <textarea className="form-control"  value={text} id="Box" rows="6" onChange={onChangeText}
      style= {{ backgroundColor : props.changeMode === 'dark'? 'grey': 'white', color : props.changeMode === 'dark'?'white': 'black' }}></textarea>
     </div>
     <button class="btn btn-info " onClick={changeUpperText}> UpperCase</button>
     <button class="btn btn-info mx-3" onClick={changeLowerText}> LowerCase</button>
     <button class="btn btn-info mx-3" onClick={clearText}> ClearText</button>
     <button class="btn btn-info mx-3" onClick={reverseText}> ReverseText</button>
     <button class="btn btn-info mx-3" onClick={copyText}> CopyText</button>
     <button class="btn btn-info mx-3" onClick={removeSpace}> RemoveExtraSpaces</button>
     
       </div>
       <div className='container my-3' style= {{ color : props.changeMode === 'dark'? 'white': 'Black' }}>
          <p>{text.split(' ').length} words {text.length} words</p>
          <p>{0.008 * text.length} minutes to read</p>
           <h2>Preview Text</h2>
           <p>{text}</p>

       </div>
       </>
    
  )
}
