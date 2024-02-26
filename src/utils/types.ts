import WebSocket from "ws";

export interface WsWithId extends WebSocket {
  id: number;
}
