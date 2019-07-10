var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    //Remove previous messages
    MessagesView.$chats.empty();

    var string = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i].text) {
        string = MessageView.render(data[i]);
        MessagesView.$chats.append(string);
      }
    }
  }

};