Messages = new Mongo.Collection("Messages", {});
Users = new Mongo.Collection("Users", {});

Meteor.methods({
  addMessage(text) {
    let message = {
      time: new Date(),
      text: text
    };

    Messages.insert(message);
  },

  addUser(name) {
    let user = {
      name: name
    };

    Users.insert(user);
  }
});

if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<MessageList />,
      document.getElementById("render-target"));
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}
