import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="timer">
        <span></span>    
      </div>
      <div className="gameover">GAME OVER</div>
      <h1>KILL THE BIRDS <span>(shoot the birds)</span></h1>
      <h2>Made by :- Siddharth</h2>

      <input className="input-circle input-circle1" type="radio" id="circle1" />
      <input className="input-circle input-circle2" type="radio" id="circle2" />
      <input className="input-circle input-circle3" type="radio" id="circle3" />
      <input className="input-circle input-circle4" type="radio" id="circle4" />
      <input className="input-circle input-circle5" type="radio" id="circle5" />
      <input className="input-circle input-circle6" type="radio" id="circle6" />
      
      <label htmlFor="circle1" className="pajaro pajaro1"><span></span></label>
      <label htmlFor="circle2" className="pajaro pajaro2"><span></span></label>
      <label htmlFor="circle3" className="pajaro pajaro3"><span></span></label>
      <label htmlFor="circle4" className="pajaro pajaro4"><span></span></label>
      <label htmlFor="circle5" className="pajaro pajaro5"><span></span></label>
      <label htmlFor="circle6" className="pajaro pajaro6"><span></span></label>

      <div className="sum">SCORE:</div>
    </div>
  );
}

export default App;
