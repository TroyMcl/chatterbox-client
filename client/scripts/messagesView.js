var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    //Remove previous messages
    MessagesView.$chats.empty();

    if (!Array.isArray(data)) {
      MessagesView.$chats.append(MessageView.render(data));
    } else {
      var string = '';
      for (var i = 0; i < data.length; i++) {
        if (data[i].text) {
          string = MessageView.render(data[i]);
          MessagesView.$chats.append(string);
        }
      }
    }
  }

};