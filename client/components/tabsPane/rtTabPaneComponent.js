import React , {Component} from "react";
import ReactDOM from "react-dom";

//customs


export class RtTabPaneComponent extends Component {

  constructor (props) {
    super(props);

  };

  render(){

    let renderElement = this.props.paneActive === this.props.paneName? <section className="rt-pane">{this.props.children}</section>:null;

    return(
        renderElement
      );
  }


}
