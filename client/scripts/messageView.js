var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <h1><%- username %></h1>
        </div>
        <div class='message'><%- text %></div>
        <div class='roomname'><%if (obj.roomname) { %><%- roomname %><% }%></div>
      </div>

    `)
};