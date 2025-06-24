import React,{useState} from 'react'

export default function Textform(props) {
  
  const upClick=()=>{
    localStorage.setItem(1,text);
    let newText;
    newText=text.toUpperCase();
    setText(newText);
  }

  const downClick=()=>{
    localStorage.setItem(1,text);
    let newText;
    newText=text.toLowerCase();
    setText(newText);
  }

  const clearClick=()=>{
    localStorage.setItem(1,text);
    setText("");
  }

  const undoClick=()=>{
    let txt=localStorage.getItem(1);
    setText(txt);
  }

  const speak=()=>{
    let msg=new SpeechSynthesisUtterance();
    msg.text=text;
    msg.lang='hi-IN'
    window.speechSynthesis.speak(msg);

  }

  const onChange=(event)=>{
    setText(event.target.value)
  }
  const [text,setText]=useState("");
  //text="new text"   wrong way to change the state
  //setText("new text")  correct way to change the state

  /*const [myStyle,setMySyle]=useState({
    color: 'black',
    backgroundColor: 'white'

  })

  const [btnText,setBtnText]=useState("Enable dark mode");
  const toggleStyle=()=>{
    if(myStyle.color==='white'){
      setMySyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable dark mode");
    }
    else{
      setMySyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable light mode");
    }
  }
  */


/*---------------------------------------------------------------------------------------------------------------*/

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
    <h2>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#121212':'white'}} ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={upClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={downClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={clearClick}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={undoClick}>Undo text</button>
    <button className="btn btn-warning mx-2" type="submit" onClick={speak}>Speak</button>
    {/*<button className="btn btn-primary mx-2" onClick={toggleStyle}>{btnText}</button>*/}
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p className='my-1'>There are {text===""?0:text.trim().split(/\s+/).length} words and {text.length-text.split(" ").length+1} character</p>
      <p>{Math.round(0.008*text.trim().split(/\s+/).length,3)} minutes is average time taken to read this</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter any text in textform above to see preview"}</p>
    </div>
    </>
  )
}

