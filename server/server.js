Meteor.startup(function(){
  if(TaskCollection.find().count() === 0){
    TaskCollection.insert({
      title: "First Note",
      description: "First thing to do is the to do list",
      category: "todo",
      show: true,
      added: Date.now()
    });

    TaskCollection.insert({
      title: "second Note ",
      description: "2nd thing to do is the to do list",
      category: "progress",
      show: true,
      added: Date.now()
    });

    TaskCollection.insert({
      title: "third ",
      description: "3nd thing to do is the to do list",
      category: "done",
      show: true,
      added: Date.now()
    });
  }
});