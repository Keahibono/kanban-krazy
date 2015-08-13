Router.route("/", function(){
  this.layout("nav");
  this.render();
});

Router.route("/todo", function(){
  this.layout("nav");
  this.render("todos");
});

Router.route("/progress", function(){
  this.layout("nav");
  this.render("progresses");
});

Router.route("/done", function(){
  this.layout("nav");
  this.render("dones");
});
