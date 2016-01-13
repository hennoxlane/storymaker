App = React.createClass({
  displayName: 'App',

  propTypes: {},

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  render: function() {
    if (this.data.currentUser) {
      return (
        <div className="app-container"><Overview /></div>
      );
    }
    return <LoginScreen />;
  }
});