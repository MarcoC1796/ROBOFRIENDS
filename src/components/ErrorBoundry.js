import React, { Component } from "react";

// This component will catch any error
// and display something alternative
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // lifecycle hook
  // if anythin errors out, it will run this lifecycle hook
  componentDidCatch(error, info) {
    this.setState({ hasEror: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Oooops. That is not good</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
