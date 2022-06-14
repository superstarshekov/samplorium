
let socket = new WebSocket('ws://localhost:8080');
let username; 
let currentTime = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

socket.onopen = function() {
  console.log('Go chatting');
}
function getUserInfo() {
    if (!username) {
        username = prompt('Your name');
    }
}

function drawMessage(username, date, message, isIncoming) {
    let container = document.getElementById('messageArea');
    let messageInfo = document.createElement('div');

    if (isIncoming) {
        messageInfo.setAttribute('class', 'left');
    } else {
        messageInfo.setAttribute('class', 'right');
    } 

    // name
    let usernameDiv = document.createElement('div');
    usernameDiv.setAttribute('class', 'name');
    usernameDiv.innerText = username;

    // msg
    let msgDiv = document.createElement('div');
    msgDiv.setAttribute('class', 'message');
    msgDiv.innerText = message;

    // date
    let dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'time');
    dateDiv.innerText = date;

    messageInfo.appendChild(usernameDiv);
    messageInfo.appendChild(msgDiv);
    messageInfo.appendChild(dateDiv);

    container.appendChild(messageInfo);
}

socket.onmessage = function(msg) {
    let msgObj = JSON.parse(msg.data); 
  drawMessage(msgObj.sender, currentTime, msgObj.content, true);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Closed, code=${event.code} cause=${event.reason}`);
  } else {
    alert('[close] Disconnected');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};

function send() {
    let msg = document.getElementById('msg').value;
    let msgObj = {
        'sender': username,
        'content': msg
    };
    
    socket.send(JSON.stringify(msgObj));
    drawMessage(username, currentTime, msg, false);
}