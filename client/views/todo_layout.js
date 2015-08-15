Template.todos.created = function() {

};

Template.todos.rendered = function(){

};

Template.todos.destroyed = function(){

};


Template.todos.helpers({
  todos: function(){
    return TaskCollection.find({ category : "todo" }).fetch();
  }
});

Template.todos.events({

});

Template.progresses.created = function() {

};

Template.progresses.rendered = function(){

};

Template.progresses.destroyed = function(){

};


Template.progresses.helpers({
  progresses: function(){
    return TaskCollection.find({ category: "progress" }).fetch();
  }
});

Template.progresses.events({

});

Template.dones.created = function() {
  console.log('created');
};

Template.dones.rendered = function(){

};

Template.dones.destroyed = function(){

};

Template.dones.helpers({
  dones: function(){
    return TaskCollection.find({ category: "done" }).fetch();
  }
});

Template.dones.events({

});

Template.homes.created = function() {

};

Template.homes.rendered = function(){

};

Template.homes.destroyed = function(){

};

Template.homes.helpers({
  homes: function(){
    return TaskCollection.find().fetch();
  }
});

Template.home.events({
  'click .toggle-checked': function(){
      TaskCollection.update(this._id, {$set: {checked: !this.checked}}); //whats current value of this.check checks value and updates
    },

    'click .delete': function(){ //this is an object need a comma
      TaskCollection.remove(this._id);
    }
});

Template.form.created = function() {

};

Template.form.rendered = function(){

};

Template.form.destroyed = function(){

};

Template.form.helpers({
    tasks: function(){
      if (Session.get('hideFinished')){
        return TaskCollection.find({checked: {$ne: true}}); //$ne = mongo way to check if true
      } else {

        return TaskCollection.find(); //otherwise return all

      }
    },
    hideFinished: function() {
      return Session.get('hideFinished'); //session variable makes to be done at top
    }
  });

Template.form.events({
    'submit .new-task': function(event, template){
      event.preventDefault();
      var title = event.target.title.value;
      var description = event.target.description.value;
      var uid = Meteor.userId();

      TaskCollection.insert({
        user: uid,
        title : title,
        description: description,
        createdAt: new Date()
      });

      event.target.title.value = "";
      event.target.description.value = "";
      return false;
    },
    'change .hide-finished': function(event){ //hides the finished projects from others
      Session.set('hideFinished', event.target.checked ); //clicking the check starts the event and hides
    }
  });