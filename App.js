import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [quote,setQuote] = useState("")
  const getQuote=()=>{
    fetch("https://api.quotable.io/random")
    .then((response)=>response.json())
    .then((data)=>setQuote(data))
   
  }
  const [color,setColor] = useState("#bc7b8d")
  const getColor=(color)=>{
    setColor(color)
    const body = document.querySelector("body")
    body.style.background =getRandomColor()
    color.target.style.backgroundColor = getRandomColor();
   
  }

  function getRandomColor(){
    let letters = "0123456789abcdef"
    let color = "#"
    for (let i =0; i<6; i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  useEffect(()=>getQuote(),[])
  useEffect(()=>{

  },[color])


  return (
    <div className="App">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h6>{quote.content}</h6>
          <h3>{quote.author}</h3>
          <button onClick={() =>{getQuote();getColor();}} ><h5>New Quote</h5></button>
        </div>
      </div>
    </div>
  );
}

export default App;
