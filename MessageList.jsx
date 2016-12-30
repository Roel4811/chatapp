MessageList = React.createClass({
  mixins: [ReactMeteorData],     // re-renders when data changes

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch(),
      users: Users.find({}).fetch()
    }
  },

  getInitialState() {
    return {
      status: "offline",
      userName: "new user"
    };
  },

  changeStatus(newStatus) {
    this.setState({
      status: newStatus
    });
  },

  setUserName(userName) {
    this.setState({
      userName: userName
    });
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

  render() {
    return (
      <div className="container">
        <div className="greeting">
          <Greeting userName={this.state.userName} status={this.state.status} />
          <SignIn onSet={this.setUserName} onChange={this.changeStatus} />
          <br/>

          <div className="messages">
            <ul>
              {this.renderMessages()}
            </ul>
            {this.renderForm()}
          </div>
        </div>

        <div className="sidebar">
          <h1>All users: </h1>
          <ul>
            {this.renderUsers()}
          </ul>
        </div>

      </div>
    );
  }
});
