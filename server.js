const http = require('http');
const WebSocket = require('ws');

//const wss = new ws.Server({noServer: true});
const ws = new WebSocket.Server({ port: 7071 });

function accept(req, res) {
  // all incoming requests must be websockets
  if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
    res.end();
    return;
  }

  // can be Connection: keep-alive, Upgrade
  if (!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end();
    return;
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
};

function onConnect(ws) {
  ws.on('message', function (message) {
    message = message.toString();
    ws.send(message + ' from here');

    // setTimeout(() => ws.close(1000, "Bye!"), 5000);
  });
}

// if (!module.parent) {
//   http.createServer(accept).listen(8080);
// } else {
//   exports.accept = accept;
// }

