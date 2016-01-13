Overview = React.createClass({
  displayName: 'Overview',

  propTypes: {},

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  _handleLogout() {
    Meteor.logout(function() {
      FlowRouter.go('/login');
    });
  },

  _renderLogout() {
    if (Meteor.user()) {
      return <button type="button" onClick={this._handleLogout} className="btn btn-info pull-right">Log Out</button>;
    }
  },

  render: function() {
    let user = this.data.currentUser.username;
    return (
      <div>
        hello {user} .... {this._renderLogout()}
      </div>
    );
  }
});