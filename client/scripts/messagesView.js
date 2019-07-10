var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    var string = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i].text) {
        string = MessageView.render(data[i]);
        this.$chats.append(string);
      }
    }
  }

};