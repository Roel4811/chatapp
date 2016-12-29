SignIn = React.createClass( {
  getInitialState() {
    return {
      signedIn: false,
      user: ""
    };
  },

  handleSignin(event) {
    event.preventDefault();

    let user = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    Meteor.call("addUser", user);
    ReactDOM.findDOMNode(this.refs.nameInput).value = "";
  },

  // toggleSignin() {
  //   var newStatus = this.state.signedIn == false ? true : false;
  //   this.setState({ signedIn: newStatus });
  // },

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
