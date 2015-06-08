Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('home', {data: {title: 'MaProject'}});
});

Router.route('/app');

Router.route('/register');

Router.route('/addnew');

if (Meteor.isClient) {
  

  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
