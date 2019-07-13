var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomName: 'lobby',

  initialize: function(data) {
    RoomsView.$select.on('change', RoomsView.render);
    RoomsView.$button.on('click', RoomsView.createRoom);
  },

  createRoomList: function(data) {
    RoomsView.$select.empty();
    //sort through all available rooms and reduce them to an array of unique values
    var roomlist = _.chain(data)
      .map( x => x.roomname)
      .uniq()
      .map(function (x) {
        var obj = {};
        obj.roomname = x;
        return obj;
      })
      .value();
    //removing undefined from list and then adding rest to our rooms dropdown
    _.each(roomlist, function (x) {
      if ( x.roomname !== undefined) {
        RoomsView.$select.append(Rooms.render(x));
      }
    });
    //changes selected prop to true so not lost on refresh
    RoomsView.$select.find("[value='" + RoomsView.roomName + "']").prop('selected', true);
  },

  render: function(event) {
    event.preventDefault();
    //updating roomName prop and running fetch which filters messages
    RoomsView.roomName = RoomsView.$select.find(':selected').val();
    App.startSpinner();
    App.fetch(function() {
      console.log('loading room');
      App.stopSpinner();
    });

  },

  createRoom: function(event) {
    event.preventDefault();
    //2 prompts to get room name and first message of new room
    var room = window.prompt('Please enter new room name:', 'Type here');
    var messageText = window.prompt('Enter first message for new room:', 'Type here');
    RoomsView.roomName = room;
    //add responses to message
    var message = {
      username: App.username,
      text: messageText,
      roomname: room
    };

    Parse.create(message, function () {
      console.log('sending message');
    });

    App.startSpinner();
    App.fetch(function() {
      console.log('Added new room');
      App.stopSpinner();
    });
  }

};
