import React, { useState } from 'react'
export default function TextForm(props) {
    // handle changes
    const handleUpClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case","success")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleLowClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower Case","success")
    }
    const handleCapitalLetter = ()=>{
        let newText=text.split('. ');
        for(let i=0;i<newText.length;i++){
            let n1=newText[i].substring(0,1).toUpperCase();
            let n2=newText[i].substring(1,999).toLowerCase();
            newText[i]=(n1+n2);
        }

        setText((newText.join(". ")))
        props.showAlert("Converted to Capital Case","success")
    }

    const handleClearText = ()=>{
        setText('')
        props.showAlert("Cleared Text","warning")
    }
    
    const handleChangeWord = ()=>{
        let oldword= prompt("Enter word to change").toLowerCase();
        let newWord= prompt("Enter new Word to Change").toLowerCase()
        let txt=text.toLowerCase().split(" ")
        for(let i=0;i<txt.length;i++){
            if(txt[i]===oldword){
                txt[i]=newWord;
            }
        }
        setText(txt.join(" "))
        props.showAlert("Changed word","success")
    }
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard","success")
    }

    const handleRemoveSpace = () =>{
        let txt=text.split(" ")
        let s=""
        s=txt.filter((element)=> {return element.length!==0}).join(" ")
        setText(s)
        props.showAlert("Removed Extra space","success")
    }
    const [text, setText] = useState('')

    // returning page 
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea  className="form-control" style={{backgroundColor : props.mode==='light'?"white":"#13466E" , color :props.mode==='light'?"black":"white" }} id="myBox" rows="10" placeholder={text} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary my-1' onClick={handleUpClick}>Upper Case</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleLowClick}>Lower Case</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleCapitalLetter}>Capital Case</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleChangeWord}>Change Word</button>
            <button className='btn btn-primary my-1 mx-2' onClick={handleRemoveSpace}>Remove Extra space</button>
            <div>
                <h2 className="my-2">Your text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}   words and {text.length} letters</p>
                    <p>Time to read this is arround : {(text.length===0) || text.endsWith(' ')?Math.round(text.split(' ').filter((element)=>{return element.length!==0}).length*0.008*100)/100 :text.split(' ').length*0.008 }  Minutes </p>
            </div>
            </div>
        </>
    )
}