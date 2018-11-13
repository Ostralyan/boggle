import React from 'react';
import Board from './Board/Board';
export default class Boggle extends React.Component {
  public render(): React.ReactNode {
    return(
      <div>
        <Board
        />
      </div>
    );
  }
}