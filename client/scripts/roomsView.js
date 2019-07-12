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

    var roomlist = _.chain(data)
      .map( x => x.roomname)
      .uniq()
      .map(function (x) {
        var obj = {};
        obj.roomname = x;
        return obj;
      })
      .value();

    _.each(roomlist, function (x) {
      if ( x.roomname !== undefined) {
        RoomsView.$select.append(Rooms.render(x));
      }
    });

    RoomsView.$select.find("[value='" + RoomsView.roomName + "']").prop('selected', true);
  },

  render: function(event) {
    event.preventDefault();

    RoomsView.roomName = RoomsView.$select.find(':selected').val();
    // console.log('selectedRoom');
    App.fetch(function() {
      console.log('loading room');
    });

  },

  createRoom: function(event) {
    event.preventDefault();

    var room = window.prompt('Please enter new room name:', 'Type here');
    var messageText = window.prompt('Enter first message for new room:', 'Type here');
    RoomsView.roomName = room;

    var message = {
      username: App.username,
      text: messageText,
      roomname: room
    };
    Parse.create(message, function () {
      console.log('sending message');
    });

    App.fetch(function() {
      console.log('Added new room');
    });
  }

};
