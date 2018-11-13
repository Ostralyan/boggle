import React from "react";
import Tile from "./Tile/Tile"
import { Trie } from "../Trie/Trie";

interface Props {};
interface State {
  boardState: TileState[]
};

interface TileState {
  letter: string;
  visited: boolean;
}

const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const boggleBoardSize = 4;

export default class Board extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    new Trie();
  }
  
  public getRandomCharacter(): string {
    return charList.charAt(Math.floor((Math.random() * 26)));
  }

  private renderTile(i: number, j: number): JSX.Element {
    return <Tile 
      letter={this.getRandomCharacter()}
    />
  }

  public createBoard(): JSX.Element[] {
    const board: JSX.Element[] = [];

    for(let i = 0; i < boggleBoardSize; i++) {
      const children: JSX.Element[] = [];
      for(let j = 0; j < boggleBoardSize; j++) {
          children.push(this.renderTile(i, j));
      }
      board.push(
        <div>
          {children}
        </div>
        );
    }

    return board;
  }

  public render(): React.ReactNode {
    return(
      <div>
        {this.createBoard()}
      </div>
    );
  }
}