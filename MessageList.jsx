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

  render() {
    return (
      <div className="container">
        <header>
          <h2>Messages</h2>
        </header>

        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
});
