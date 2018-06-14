import * as React from 'react';
import { Square } from './square';
import './style.css';

interface IBoardProps {
    squares: Array<'X' | 'O' | null>;
    onClick(i: number): void;
}

export class Board extends React.Component<IBoardProps, {}> {
  public renderSquare(i: number) {
    const onClick = () => {
      this.props.onClick(i);
    }
    return <Square
      value={this.props.squares[i]}
      onClick={onClick}
    />;
  }

  public render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
