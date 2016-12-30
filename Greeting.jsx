Greeting = React.createClass({
  render() {
    var status = this.props.status
    var name = this.props.userName

    return (
      <h1> Hello {name}! you are now {status} </h1>
    );
  }
});
