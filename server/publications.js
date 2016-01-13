Meteor.publish('userData', function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {timers: 1}});
  }

  this.ready();
});