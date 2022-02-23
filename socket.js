import  {WebSocketServer } from "ws";//Corrregido para versión actual (xa non usa ws e ws.Server) https://github.com/websockets/ws/issues/1538

let instance;

export const connect = () => {
    const socket = new WebSocketServer({ port: 8080 });

    socket.on("connection", ws => {
        instance = ws;
        ws.send("Conectado al socket!");
    })
}

export const send = (method, url, data) => {
    if(instance) {
        instance.send(`${method} ${url} ${JSON.stringify(data)}`);
    }
}