Signin = React.createClass( {

  handleSignin(event) {
    event.preventDefault();

    let user = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    Meteor.call("addUser", user);
    ReactDOM.findDOMNode(this.refs.nameInput).value = "";
  },

  render() {
  return <form onSubmit={this.handleSignin} >
    <input
      type="text"
      ref="nameInput"
      name="user"
      placeholder="Enter username..." />
    </form>
  }
});
