MessageList = React.createClass({
  mixins: [ReactMeteorData],     // re-renders when data changes

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
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
        <Greeting name="Roel" />
        <Signin />
        <br />
        <button> Sign in </button>

        <ul>
          {this.renderMessages()}
        </ul>

        {this.renderForm()}
      </div>
    );
  }
});
