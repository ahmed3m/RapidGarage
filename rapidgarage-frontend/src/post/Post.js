import React, {Component} from 'react';


export default class Post extends Component{
    constructor(){
      super();
      this.state = {
      title:"RapidGarage",
      text: "RapidGarage sale!!! ",
      userName: "Bacon",
      postDate: "03/14/2017",
      startDate:"12/13/2017",
      endDate:"12/13/2017",
      address:"137 7th Ave",
      city:"New York",
      zip:"10001",
      tag: ["devices", "cars"]
    }
  }
    render(){
      return(
        <div>
            <article>
                <h1>{this.state.title}</h1>
                <h5><span class="glyphicon glyphicon-time"></span> Post by {this.state.userName}, {this.state.postDate}.</h5>
                <h4>Sale begin on {this.state.startDate}</h4>
                <h4>End {this.state.endDate}</h4>
                <p>{this.state.text}</p>
            </article>
        </div>
    );
  }
}
