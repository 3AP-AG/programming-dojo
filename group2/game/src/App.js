import React, { Component } from 'react';
import './App.css';
import Cell from './cell';

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

  generateMatrix = () => {
    if (this.state.dimensionX && this.state.dimensionY) {
      const buildMatrix = [];
      for (let iy = 0; iy < this.state.dimensionY; iy++) {
        const xRow = []
        for (let ix = 0; ix < this.state.dimensionX; ix++){
          xRow.push(false);
        }
        buildMatrix.push(xRow);
      }
      console.log('matrix:', buildMatrix);
      this.setState({
        matrix: buildMatrix,
      });
    }
  }

  inputY = (event) => {
    console.log('Y:', event.target.value)
    this.setState({ dimensionY: event.target.value });

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
          <button onClick={this.generateMatrix}>generate matrix</button>
          Test
          <table>
            {this.state.matrix.map(yRow => { 
            return (
              <tr>
                {yRow.map(value => {
            return (
              <td>
            <Cell alive={value} />
            </td>
            )
          })}
              </tr>
            )})}
          </table>

        </header>
      </div>
    );
  }
}

export default App;
