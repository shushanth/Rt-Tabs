import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//customs

import {RtTabsComponent as RtTabs} from './tabs/rtTabsComponent';
import {RtTabsPanesComponent as RtTabsPanes} from './tabsPane/RtTabsPanesComponent';

class RtTabsMain extends Component {

  constructor(props){
    super(props);
    this.isTabsPanesMisMatch = false;
    this.activateSelectedTab = this.activateSelectedTab.bind(this);
    this.state = {
      tabSelected:'myPane1'
    };



  };

  //tab and tab pane should be of the same or else error will be thrown when componentWillMount
  //gets mounted
  componentWillMount(){

    if(this.props.TAB_CONTAINER_NAME !== this.props.PANE_CONTAINER_NAME){
        this.isTabsPanesMisMatch = true;
        console.error('tab container name and pane conatiner are not proper');
    }
  };

  //make state change on Tab active

  activateSelectedTab(selectedTab){

    //state change for the selcted tab
    this.setState({
        tabSelected:selectedTab
    });
  }



//render
  render(){
    const newProps = Object.assign({},this.props,this.state); //(es7 speread opeartor babel 2)//{...this.props, ...this.state}//
    if(this.isTabsPanesMisMatch){
      return (<p className="tab-pane-mismatch">Mismatch in tabs and panes name</p>);
    }else{
      return(
        <section className="tab-pane-main">
          <RtTabs {...newProps} makeSelectedTabActive={this.activateSelectedTab}/>
          <RtTabsPanes {...newProps}/>
        </section>
      );
    }
  }

};

//defualt props;
RtTabsMain.defaultProps = {
    'TAB_CONTAINER_NAME':'myContainerName',
    'PANE_CONTAINER_NAME':'myContainerName'
}

ReactDOM.render(<RtTabsMain/>,document.getElementById('main-tabs'));
