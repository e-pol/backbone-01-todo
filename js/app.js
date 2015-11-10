var app = app || {};
var ENTER_KEY = 13;

$(function() {

    console.log( 'app type: ' + typeof( app ) );
    console.log( 'app.AppView type: ' + typeof( app.AppView ) );
    console.log( 'app.TodoView type: ' + typeof( app.TodoView ) );
    
    new app.AppView();

});