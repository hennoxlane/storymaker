LoginScreen = React.createClass({
  displayName: 'Login',

  handleLogin() {
    FlowRouter.go('/');
  },

  render() {
    return (
      <div className='app-container'>
        <h1>Log in or create account</h1>
        <Accounts.ui.LoginFormSet redirect={this.handleLogin}/>
      </div>
    );
  }
});