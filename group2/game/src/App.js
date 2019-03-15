import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    matrix: [[]],
    dimensionX: 0,
    dimensionY: 0,
  };

  inputX = (event) => {
    console.log('X:', event.target.value);
    this.setState({ dimensionX: event.target.value });
  };

  inputY = (event) => {
    console.log('Y:', event.target.value)
    this.setState({ dimensionY: event.target.value });
    if (this.state.dimensionX && this.state.dimensionY) {
      const buildMatrix = [[]];
      for (let ix = 0; ix < this.state.dimensionX; ix++) {
        for (let iy = 0; iy < this.state.dimensionY; iy++) {
          buildMatrix[iy][ix] = false;
        }
      }
      console.log('matrix:', buildMatrix);
      this.setState({
        matrix: buildMatrix,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}

          <input onChange={this.inputX}/>
          <input onChange={this.inputY}/>
          Test
        </header>
      </div>
    );
  }
}

export default App;
