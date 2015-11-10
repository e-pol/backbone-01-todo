var app = app || {};

console.log('js/models/todo.js started');

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});

console.log('js/models/todo.js finished');