Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.dashboard.events({
  'click .logout': function(evt){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.login.events({
    'submit form': function(evt){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});