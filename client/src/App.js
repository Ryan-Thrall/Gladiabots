import React from 'react';
import './App.css';

function App() {

  const clickedHexagon = (id) => {
    console.log('clicked ' + id);
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <div className="hexagon light"><img src="assets/images/BlueBot.png" alt="" /></div>
          <div className="hexagon medium"><img src="assets/images/BlueBot.png" alt="" /></div>
          <div className="hexagon dark"><img src="assets/images/BlueBot.png" alt="" /></div>
          <div className="hexagon light"><img src="assets/images/BlueBot.png" alt="" /></div>
        </div>

        <div className="row">
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
        </div>

        <div className="row">
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
        </div>

        <div className="row">
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
        </div>

        <div className="row">
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
        </div>

        <div className="row">
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
          <div className="hexagon light"></div>
          <div className="hexagon medium"></div>
          <div className="hexagon dark"></div>
        </div>

        <div className="row">
          <div className="hexagon light"><img src="assets/images/RedBot.png" alt="" /></div>
          <div className="hexagon medium"><img src="assets/images/RedBot.png" alt="" /></div>
          <div className="hexagon dark"><img src="assets/images/RedBot.png" alt="" /></div>
          <div className="hexagon light"><img src="assets/images/RedBot.png" alt="" /></div>
        </div>


      </div>
    </div>
  );
}

export default App;
