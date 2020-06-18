//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState
  // hooks.  You'll need one for the home score and another for the away
  //  score.

 let beginning = 0

  const homeNumber = useState(beginning);
  const homeNum = homeNumber[0];
  const homeCount = homeNumber[1];

  const awayNumber = useState(beginning);
  const awayNum = awayNumber[0];
  const awayCount = awayNumber[1];
   
  
    // const homeNumber = 12;
    // const [homeNum, homeCount] = useState(homeNumber);
    // const awayNumber = 2;
    // const [awayNum, awayCount] = useState(awayNumber);

    
   console.log(homeCount);
   console.log(homeNum);

  return (
    <div className="container">
      <section className="scoreboard" style ={{backgroundColor:'hotpink', border: "dashed .2rem navy"}}>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name" style ={{backgroundColor:'cadetBlue', fontStyle: 'italic'}}>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these
            divs to accept dynamic values from our state. */}
            <div className="home__score">{homeNum}</div>
          </div>
          <div className="timer" style = {{backgroundColor: 'navy'}}>00:03</div>
          <div className="away">
            <h2 className="away__name" style ={{backgroundColor:'gold', fontStyle:'italic'}}>Tigers</h2>
            <div className="away__score">{awayNum}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" style = {{backgroundColor: 'navy'}} onClick = {()=> homeCount(homeNum +7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" style = {{backgroundColor: 'navy'}} onClick = {()=> homeCount(homeNum + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" style = {{backgroundColor: 'navy'}} onClick ={()=> awayCount(awayNum + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" style = {{backgroundColor: 'navy'}} onClick ={()=> awayCount(awayNum + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
