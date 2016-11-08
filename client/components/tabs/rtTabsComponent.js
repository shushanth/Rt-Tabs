import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//customs
import {RtTabComponent as RtTab} from './rtTabComponent';

export class RtTabsComponent extends Component{

  constructor(props){
    super(props);
    this.activateSelectedTab = this.activateSelectedTab.bind(this);

  };

  activateSelectedTab(selectedTab){
    this.props.makeSelectedTabActive(selectedTab);
  }

  render(){


    return(
      <section className="rt-tabs">

        <RtTab  onTabSelect = {this.activateSelectedTab} selectedTab={this.props.tabSelected} tabName="myPane1">Tab #1</RtTab>
        <RtTab  onTabSelect = {this.activateSelectedTab} selectedTab={this.props.tabSelected} tabName="myPane2">Tab #2</RtTab>
        <RtTab  onTabSelect = {this.activateSelectedTab} selectedTab={this.props.tabSelected} tabName="myPane3">Tab #3</RtTab>

      </section>
      )
  }

}
