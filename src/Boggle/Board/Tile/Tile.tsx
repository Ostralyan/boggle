import React from "react";
import "./Tile.css";

interface Props {
  letter: string
};
interface State {};

export default class Tile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }



  public render(): React.ReactNode {
    return(
      <div className="Tile">
        <span className="letter">{this.props.letter}</span>
      </div>
    );
  }
}