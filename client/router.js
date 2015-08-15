Router.configure({
  layoutTemplate: "nav"
});

Router.onBeforeAction(function (){
    if (! Meteor.userId()){
      this.render('/login');
    } else {
      this.render('/');
    }
    this.next();
})

Router.route("/", function(){
  this.render("homes");
});

Router.route("/todo", function(){
  this.render("todos");
});

Router.route("/progress", function(){
  this.render("progresses");
});

Router.route("/done", function(){
  this.render("dones");
});

Router.route("/login", function(){
  this.render("login");
});

Router.route('/homes', function () {
  this.render('homes');
});