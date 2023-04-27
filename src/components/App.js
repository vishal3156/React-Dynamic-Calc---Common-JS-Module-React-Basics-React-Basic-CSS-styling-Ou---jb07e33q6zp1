import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [input, setInput] = useState({
    num1: 0,
    num2: 0
});
const [sum, setSum] = useState(0)
  
  useEffect(() => {
    setSum(parseInt(input.num1) + parseInt(input.num2))
 }, [input])

 const handleInput = function(e){
  setInput({
      ...input, 
      [e.target.name]: e.target.value
  });
};

  return (
   <div id="main">
      <input id="input1" onChange={handleInput} name="num1" value={input.num1} type="text"></input>
      <input id="input2" onChange={handleInput} name="num2" value={input.num2} type="text"></input>
      <p id="result">{sum}</p>
   </div>
  )
}

export default App;

