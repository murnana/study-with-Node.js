import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Board } from "./board";
import './style.css';


interface IGameState {
    history: Array<{
        squares: Array<'X' | 'O' | null>
    }>;
    stepNumber: number,
    xIsNext: boolean;
}

class Game extends React.Component<{}, IGameState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    public render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        const jumpTo = () => this.jumpTo(move);
          return (
            <li key={move}>
              <button onClick={jumpTo}>{desc}</button>
            </li>
          );
      });

      let status: string;
      if(winner) {
        status = 'Winner ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      const handleClick = (i: number) => this.handleClick(i);

      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={handleClick}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
  }

  private handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        'squares': squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  private jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares: Array<'X' | 'O' |  null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const i of lines) {
    const [a, b, c] = i;
    if (squares[a] && squares[a] === squares[b] &&   squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
