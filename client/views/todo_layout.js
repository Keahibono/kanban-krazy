Template.todos.created = function() {
  console.log('created');
};

Template.todos.rendered = function(){
  console.log('rendered');
};

Template.todos.destroyed = function(){
  console.log('destroyed');
};


Template.todos.helpers({
  todos: function(){
    return TaskCollection.find().fetch();
  }
});


Template.progresses.created = function() {
  console.log('created');
};

Template.progresses.rendered = function(){
  console.log('rendered');
};

Template.progresses.destroyed = function(){
  console.log('destroyed');
};


Template.progresses.helpers({
  progresses: function(){
    return TaskCollection.find().fetch();
  }
});

Template.dones.created = function() {
  console.log('created');
};

Template.dones.rendered = function(){
  console.log('rendered');
};

Template.dones.destroyed = function(){
  console.log('destroyed');
};



Template.todos.helpers({
  dones: function(){
    return TaskCollection.find().fetch();
  }
});

Template.task.created = function() {
  console.log('created');
};

Template.task.rendered = function(){

};

Template.task.destroyed = function(){

};

Template.task.helpers({

  }
);

Template.task.events({

});

