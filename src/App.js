
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      fullname:"mohamed",
      bio: "elelelelele",
      img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14554760-man-profile-negative-photo-anonymous-silhouette-human-head-businessman-worker-support-vector-illustration&psig=AOvVaw17oKY6r_eZntaVCqiyFXNo&ust=1726244305360000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjLmKfnvYgDFQAAAAAdAAAAABAE",
      profession: "student",
      show: false
    }
  }
   
  HideProfile=()=> {
    this.setState({show:!this.state.show})
  }

  render() {
    return (
      <div>
        <button onClick={this.HideProfile}>{this.state.show==true?"hide":"show"} profile </button>

        {this.state.show==true? <div>
        <h1>{this.state.fullname}</h1>
        <h4>{this.state.bio}</h4>
        <img src={this.state.img} />
        <p>{this.state.profession}</p>
        </div>:null}
      </div>
    )
  }
}
