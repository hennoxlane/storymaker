FlowRouter.route( '/', {
  name: 'home',
  action() {
    ReactLayout.render( App );
  }
});

FlowRouter.route( '/login', {
  name: 'login',
  action() {
    ReactLayout.render( LoginScreen );
  }
});