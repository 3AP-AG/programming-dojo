import React, {Component} from 'react';
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
    this.setState({dimensionX: event.target.value});
  };

  generateMatrix = () => {
    if (this.state.dimensionX && this.state.dimensionY) {
      const buildMatrix = [];
      for (let iy = 0; iy < this.state.dimensionY; iy++) {
        const xRow = []
        for (let ix = 0; ix < this.state.dimensionX; ix++) {
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
    this.setState({dimensionY: event.target.value});

  };

  updateCellState = (x, y) => {
    return () => {
      this.setState((prevState) => {
        const {matrix} = prevState;
        matrix[y][x] = !matrix[y][x];
        return {
          matrix,
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.inputX}/>
          <input onChange={this.inputY}/>
          <button onClick={this.generateMatrix}>generate matrix</button>
          Test
          <table>
            {this.state.matrix.map((yRow, yIndex) => {
              return (
                <tr>
                  {yRow.map((value, xIndex) => {
                    return (
                      <td>
                        <Cell alive={value} x={xIndex} y={yIndex}
                              onClick={this.updateCellState(xIndex, yIndex)}/>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </table>
        </header>
      </div>
    );
  }
}

export default App;
