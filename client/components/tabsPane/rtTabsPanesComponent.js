import React,{Component} from "react";
import ReactDOM from "react-dom";

//customs

import {RtTabPaneComponent as RtTabPane} from "./rtTabPaneComponent";

export class RtTabsPanesComponent extends Component{

  constructor(props){
    super(props);


  };

  render(){

    return(
        <section className="rt-panes">

          <RtTabPane paneActive = {this.props.tabSelected} paneName="myPane1">
            <h3 className="rt-pane-heading">LOREM Content #1</h3>
              <p className="rt-pane-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mauris lorem. Nullam molestie ipsum in urna dignissim sollicitudin. Integer fringilla vel leo pharetra posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras nisi tortor, fermentum in leo interdum, commodo accumsan metus. Sed convallis tristique egestas. Aenean laoreet congue convallis. Fusce sagittis sagittis magna, aliquam maximus diam feugiat ac. Aliquam non ex at nunc eleifend accumsan ac et felis. Curabitur vulputate venenatis efficitur. Integer in aliquet justo.
              </p>
          </RtTabPane>

          <RtTabPane paneActive = {this.props.tabSelected} paneName="myPane2">
            <h3 className="rt-pane-heading">LOREM Content #2</h3>
              <p className="rt-pane-description">
                Praesent hendrerit est non tortor tempor, in gravida ligula lobortis. Cras ligula enim, luctus id accumsan quis, semper a justo. Nulla ullamcorper pretium nunc, et sagittis ligula viverra eget. Phasellus rutrum auctor nibh, commodo varius magna pulvinar eu. Nullam congue ante a est sollicitudin, et gravida nibh laoreet. Aenean condimentum nulla porttitor libero ultricies pulvinar. Pellentesque sed semper tortor. Nam finibus, diam ac iaculis porttitor, neque risus interdum libero, ac condimentum justo ex nec sapien. Praesent sodales nisl vel quam luctus vulputate. Pellentesque aliquet, nisi a aliquam tincidunt, sem urna dapibus odio, condimentum imperdiet nibh sem vel enim. Maecenas ex est, congue id ornare id, condimentum ultricies odio. Sed consequat mollis tellus. Fusce pulvinar euismod enim in ultrices. Curabitur vitae odio ut quam pulvinar eleifend.
              </p>
          </RtTabPane>

          <RtTabPane paneActive = {this.props.tabSelected} paneName="myPane3">
            <h3 className="rt-pane-heading">LOREM Content #3</h3>
              <p className="rt-pane-description">
                  Duis vel mollis risus, non tincidunt libero. Sed auctor nisl ac nisi elementum venenatis. Donec vel eros consectetur, eleifend lectus vel, imperdiet mauris. Praesent eu commodo dolor. Sed tempor odio velit, a luctus tellus porta vel. Cras scelerisque sem in erat porta lobortis. Donec nec posuere erat. Etiam fringilla turpis in elit varius sagittis. Duis porta nulla et elit ultrices, vel accumsan risus ultrices. Nunc vulputate, augue et vulputate condimentum, nisl lectus volutpat lorem, sit amet finibus lectus dui vitae libero.
                </p>
          </RtTabPane>

        </section>
    );
  }

}
