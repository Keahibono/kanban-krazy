Meteor.startup(function(){
  if(TaskCollection.find().count() === 0){
    TaskCollection.insert({
      title: "First Note",
      description: "First thing to do is the to do list",
      category: "todo",
      show: true,
      added: Date.now()
    });
  }


});