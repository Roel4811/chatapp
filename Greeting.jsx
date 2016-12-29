Greeting = React.createClass({

  render() {
    if (this.props.name) {
      return <h1>Hello, please sign in to start your chats</h1>
    } else {
      return <h1>Hi there, {this.props.name}. Welcome!</h1>
    }
  }
});
