var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    //Remove previous messages
    MessagesView.$chats.empty();
    var room = RoomsView.roomName;

    if (!Array.isArray(data)) {
      MessagesView.$chats.append(MessageView.render(data));
    } else {
      var string = '';
      for (var i = 0; i < data.length; i++) {
        if (data[i].text && room === 'lobby') {
          string = MessageView.render(data[i]);
          MessagesView.$chats.append(string);
        } else if (data[i].text && data[i].roomname === room) {
          string = MessageView.render(data[i]);
          MessagesView.$chats.append(string);
        }
      }
    }

    MessagesView.addFriendClass(true);
  },

  addFriendClass: function(isRender) {

    var elements = document.querySelectorAll(".chat h1");
    for (var i = 0; i < elements.length; i++) {
      if (isRender) {
        elements[i].addEventListener("click", Friends.addFriends);
      }
      if (_.contains(Friends.friendsList, elements[i].textContent)) {
        elements[i].classList.add('friend');
      }
    }
  }
};