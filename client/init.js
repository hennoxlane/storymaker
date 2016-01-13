FlowRouter.wait();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup(function() {
  injectTapEventPlugin();
  FlowRouter.initialize();
});