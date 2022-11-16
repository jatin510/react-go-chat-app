const url = 'ws://localhost:8081/ws';

const socket = new WebSocket(url);

let connect = () => {
  console.log('Attempting websocket connection ... ');

  socket.onopen = () => {
    console.log('Socket connection open');
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log('Socket Closed Connection: ', event);
  };

  socket.onerror = (error) => {
    console.log('Socket Error: ', error);
  };
};

let sendMsg = (msg) => {
  console.log('sending msg: ', msg);
  socket.send(msg);
};

export { connect, sendMsg };
