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
      this.setState({
        matrix: buildMatrix,
      }, () => {
        this.state.matrix.forEach((yRow, yIndex) => {
          yRow.forEach((xColumn, xIndex) => {
            this.countLivingNeighbors(xIndex, yIndex);
          })
        })
      });
    }
  };

  inputY = (event) => {
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

  checkMatrix = () => {
    const buildMatrix = [];
    for (let iy = 0; iy < this.state.dimensionY; iy++) {
      const xRow = [];
      for (let ix = 0; ix < this.state.dimensionX; ix++) {
        let noOfAliveNeighbours = this.countLivingNeighbors(ix, iy);
        xRow.push(this.isNewCellAlive(this.state.matrix[iy][ix], noOfAliveNeighbours));
      }
      buildMatrix.push(xRow);
    }

    this.setState({
      matrix: buildMatrix,
    });
  };

  isNewCellAlive = (currentCell, noOfAliveNeighbours) => {
    if (currentCell) {
      if (noOfAliveNeighbours < 2 || noOfAliveNeighbours > 3) return false
      return currentCell;
    } else {
      return noOfAliveNeighbours === 3
    }
  };

  countLivingNeighbors = (x, y) => {
    const neighbors = [
      {x: x - 1, y: y},
      {x: x - 1, y: y - 1},
      {x: x - 1, y: y + 1},
      {x: x, y: y - 1},
      {x: x, y: y + 1},
      {x: x + 1, y: y},
      {x: x + 1, y: y - 1},
      {x: x + 1, y: y + 1},
    ];

    const aliveNeighbors = neighbors.filter(({x, y}) => y >= 0 && y < this.state.dimensionY && x >= 0 && x < this.state.dimensionX)
      .map(({x, y}) => this.state.matrix[y][x])
      .filter(value => value);

    return aliveNeighbors.length;
  };

  render() {
    return (
      <div className="app">
        <input onChange={this.inputX}/>
        <input onChange={this.inputY}/>
        <button className="button-app" onClick={this.generateMatrix}>generate matrix</button>
        <button className="button-app"
                disabled={this.state.dimensionX === 0 && this.state.dimensionY === 0}
                onClick={this.checkMatrix}>Play
        </button>
        <table>
          <tbody>
          {this.state.matrix.map((yRow, yIndex) => {
            return (
              <tr key={`yRow${yIndex}`}>
                {yRow.map((xColumn, xIndex) => {
                  return (
                    <td key={`$xColumn${xIndex}`}>
                      <Cell alive={xColumn} x={xIndex} y={yIndex}
                            onClick={this.updateCellState(xIndex, yIndex)}/>
                    </td>
                  )
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
        {/* language=CSS */}
        <style jsx>{`
            .app {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                height: 100vh;
            }

            .button-app {
                background: black;
                color: white;
                border: none;
                outline: none;
                text-transform: uppercase;
                font-size: 16px;
                font-weight: 600;
                padding: 10px;
                border-radius: 5px;
                margin: 10px;
            }

            .app input {
                margin: 10px;
            }
        `}</style>
      </div>
    );
  }
}

export default App;
