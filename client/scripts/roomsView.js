var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(data) {
    RoomsView.$select.on('change', RoomsView.render());

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
        if ( x.roomname !== undefined && x.roomname !== 'lobby') {
          RoomsView.$select.append(Rooms.render(x))
        }
      });
  },

  render: function() {
  }

};
