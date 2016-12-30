SignIn = React.createClass( {

  handleSignin(event) {
    event.preventDefault();

    let user = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    Meteor.call("addUser", user);
    this.props.onSet(user);
    ReactDOM.findDOMNode(this.refs.nameInput).value = "";
  },

  handleChange(event) {
    var status = event.target.value;
    this.props.onChange(status);
  },

  // toggleSignin() {
  //   var newStatus = this.state.signedIn == false ? true : false;
  //   this.setState({ signedIn: newStatus });
  // },

  render() {
  return (
    <div>
      <form onSubmit={this.handleSignin} >
        <input
          type="text"
          ref="nameInput"
          name="user"
          placeholder="Enter username..." />

        <select id="status" onChange={this.handleChange}>
          <option value="offline">
            offline
          </option>
          <option value="online">
            online
          </option>
        </select>
      </form>


    </div>
  )
  }
});
