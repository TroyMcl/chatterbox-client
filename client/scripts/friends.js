var Friends = {

  friendsList: [],
  //method invoked only on click of username
  addFriends: function(event) {
    console.log(this.textContent);
    //check for clicked username in friendsList array, will add
    if (!_.contains(Friends.friendsList, this.textContent)){
      Friends.friendsList.push(this.textContent);
    } else {
      //for toggle will remove username from friendsList
      Friends.friendsList = _.without(Friends.friendsList, this.textContent);
    }
    MessagesView.addFriendClass(false);
  }
};