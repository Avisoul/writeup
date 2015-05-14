Template.newTask.events({
    'submit': function(event, template) {
        event.preventDefault();
        event.stopPropagation();
        
        var task = {
            title :$("#inputTitle").val(),
            measure : $("#inputMeasure").val(),
            count : $("#inputCount").val(),
            employer : $("#inputEmployer").val(),
            deadlineDate : $("#inputDeadlineDate").val(),
            deadlineTime : $("#inputDeadlineTime").val(),
            content: "Текст",
            comment: $("#inputComment").val()
        };


        Meteor.call('addTask', task, function(error, id) {
            console.log(error);
            console.log(id);

            Router.go("/task/"+id);
        });
    }
});

Template.newTask.helpers({
    'currentDate': function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = yyyy + "-" + mm + '-'+dd;

        return today;
    }, 
    'employers': function () {
        return Meteor.users.find().fetch();
    },
    'fullname': function() {
        return this.profile.name + " " + this.profile.sname;
    }
})