import * as ws from "ws";
import { WsWithId } from "../utils/types.js";
import { handler } from "./handler.js";

export const wsServer = new ws.WebSocketServer({ port: 3000 }, () => {
  console.log("START SERVER");
});
export const allSockets: any[] = [];
wsServer.on("connection", (clientSocket: WsWithId) => {
  console.log("Client connected");
  allSockets.push(clientSocket);
  clientSocket.on("message", (message: string) => {
    const parsedData = JSON.parse(message);
    console.log(parsedData);
    handler(parsedData, clientSocket);
  });

  clientSocket.on("close", () => {
    console.log("Client disconnected");
  });
});
