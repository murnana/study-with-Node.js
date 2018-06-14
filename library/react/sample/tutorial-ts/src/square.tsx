import * as React from 'react';
import './style.css';


interface ISquareProps {
  value: 'X' | 'O' | null;
  onClick(): void;
}

export function Square (props: ISquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
