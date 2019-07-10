var FormView = {

  $form: $('form'),

  initialize: function() {
    $('.submit').on('submit', FormView.handleSubmit);
    $('.refresh').on('click', FormView.refreshMessages);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');

    var message = {
      username: App.username,
      text: $('#message').val(),
      //roomname: '4chan'
    };
    Parse.create(message, function () {
      console.log('sending message');
    });

    App.fetch(function () {
      console.log('refresh messages');
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  refreshMessages: function(event) {
    event.preventDefault();

    App.fetch(function () {
      console.log('refresh with button');
    });
  }

};