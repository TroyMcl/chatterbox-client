var FormView = {

  $form: $('form'),

  initialize: function() {
    $('.submit').on('click', FormView.handleSubmit);
    $('.refresh').on('click', FormView.refreshMessages);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');

    //Create message object to send to Parse server
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.roomName
    };
    //Send message to the server
    Parse.create(message, function () {
      console.log('sending message');
    });
    //Refresh the message list displayed
    App.startSpinner();
    App.fetch(function () {
      console.log('refresh messages');
      App.stopSpinner();
    });
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  refreshMessages: function(event) {
    event.preventDefault();

    //Refresh the message list displayed
    App.startSpinner();
    App.fetch(function () {
      console.log('refresh with button');
      App.stopSpinner();
    });
  }

};