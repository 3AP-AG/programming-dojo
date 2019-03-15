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
      }, () => {
        this.state.matrix.forEach((yRow, yIndex) => {
          yRow.forEach((xColumn, xIndex) => {
            this.countLivingNeighbors(xIndex, yIndex);
          })
        })
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

  checkMatrix = () => {
    console.log("Original matrix",this.state.matrix)
    const buildMatrix = [];
      for (let iy = 0; iy < this.state.dimensionY; iy++) {
        const xRow = []
        for (let ix = 0; ix < this.state.dimensionX; ix++) {
          let noOfAliveNeighbours = this.countLivingNeighbors(ix,iy);
          console.log('ALIVE NEB:', noOfAliveNeighbours);
          console.log('POSITION:', iy, ix);
          console.log("NEW VALUE",this.isNewCellAlive(this.state.matrix[ix,iy], noOfAliveNeighbours))
          xRow.push(this.isNewCellAlive(this.state.matrix[ix,iy], noOfAliveNeighbours));
        }
        buildMatrix.push(xRow);
      }

    this.setState({
      matrix: buildMatrix,
    });
  }

  isNewCellAlive = (currentCell, noOfAliveNeighbours) => {
    if (currentCell){
      if (noOfAliveNeighbours < 2 || noOfAliveNeighbours> 3) return false
      return currentCell;
    }else{
      return noOfAliveNeighbours === 3 
    }

  }

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

    const neighborsInTheGrid = neighbors.filter(({x, y}) => y >= 0 && y < this.state.dimensionY && x >= 0 && x < this.state.dimensionX);
    // console.log('neighbors', x, y, neighborsInTheGrid.length);

    const aliveNeighbors = neighbors.filter(({x, y}) => y > 0 && y < this.state.dimensionY && x > 0 && x < this.state.dimensionX)
    .map(({x, y}) => this.state.matrix[y][x])
    .filter(value => value);
    // console.log('alive', x, y, aliveNeighbors);

    return aliveNeighbors.length;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.inputX}/>
          <input onChange={this.inputY}/>
          <button onClick={this.generateMatrix}>generate matrix</button>
          Test
          <button onClick={this.checkMatrix}>Play</button>
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
        </header>
      </div>
    );
  }
}

export default App;
