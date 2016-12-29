MessageList = React.createClass({
  mixins: [ReactMeteorData],     // re-renders when data changes

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch(),
      users: Users.find({}).fetch()
    }
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  renderUsers() {
    return this.data.users.map((user) => {
      return <User key={user._id} user={user} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    let message = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("addMessage", message);
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  renderForm() {
    return <form onSubmit={this.handleSubmit} >
      <input
        type="text"
        ref="textInput"
        name="message"
        placeholder="Enter message..." />
      </form>
  },

  signOut() {
    name = this.data.users[this.data.users.length-1];
    Meteor.call("updateUser", name);
  },

  render() {
    return (
      <div className="container">
        <Greeting name="Roel" />
        <SignIn />
        <br/>
        <button onClick={this.signOut}> sign out </button>
        <ul>
          {this.renderMessages()}
        </ul>

        {this.renderForm()}
        <br/>
        <p>Other users: </p>

        <ul>
          {this.renderUsers()}
        </ul>

        </div>
    );
  }
});
