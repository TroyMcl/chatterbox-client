var Friends = {

  friendsList: [],

  addFriends: function(event) {
    console.log(this.textContent);
    if (!_.contains(Friends.friendsList, this.textContent)){
      Friends.friendsList.push(this.textContent);
    }
    MessagesView.addFriendClass(false);
  }
};
