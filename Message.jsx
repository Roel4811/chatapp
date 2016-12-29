Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },

  formatTime(time) {
    return moment(time).format('h:mm A');
  },

  handleClick(event) {
    event.preventDefault();
    let message = this.props.message;
    Meteor.call("removeMessage", message);
  },

  render() {
    return (
      <li>{this.formatTime(this.props.message.time)} - {this.props.message.text} <button onClick={this.handleClick}>delete</button></li>
    );
  }
});

