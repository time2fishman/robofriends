import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>An Error has occurred. Please contact administrator.</h1>
    }
    return this.props.children
  }
}
