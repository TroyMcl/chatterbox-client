var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    //Remove previous messages
    MessagesView.$chats.empty();
    var room = RoomsView.roomName;

    var string = '';
    //Check each message object has text, and is part of the correct room
    for (var i = 0; i < data.length; i++) {
      //Default room case for unfiltered list
      if (data[i].text && room === 'lobby') {
        string = MessageView.render(data[i]);
        MessagesView.$chats.append(string);
      //Show only messages from specified room
      } else if (data[i].text && data[i].roomname === room) {
        string = MessageView.render(data[i]);
        MessagesView.$chats.append(string);
      }
    }

    MessagesView.addFriendClass(true);
  },

  addFriendClass: function(isRender) {
    //Loop through each message element, attach username click function and add/remove friend class
    var elements = document.querySelectorAll(".chat h1");
    for (var i = 0; i < elements.length; i++) {
      //Skip adding click event if not called by message list refresh
      if (isRender) {
        elements[i].addEventListener("click", Friends.addFriends);
      }
      if (_.contains(Friends.friendsList, elements[i].textContent)) {
        elements[i].classList.add('friend');
      } else {
        elements[i].classList.remove('friend');
      }
    }
  }
};