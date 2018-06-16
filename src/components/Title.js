import React, { Component } from "react"

class Title extends Component {

  componentWillMount() {

  }
  render() {
    return (
      <h1>{this.props.text}</h1>
    )
  }
}

export default Title