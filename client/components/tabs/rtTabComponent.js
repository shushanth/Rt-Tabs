import React , {Component}  from "react";
import ReactDOM from 'react-dom';

//customs

export class RtTabComponent extends Component{

  constructor (props) {
      super(props);
      this.handleTabClick = this.handleTabClick.bind(this);
  };

  handleTabClick(){
    let selectedTab = this.props.tabName;
    this.props.onTabSelect(selectedTab);
  };

  render(){

    return(
        <section
           className={"rt-tab" + (this.props.selectedTab === this.props.tabName?" active":" not-active")}
           onClick={this.handleTabClick}>
          {this.props.children}
        </section>
  );
}


}
