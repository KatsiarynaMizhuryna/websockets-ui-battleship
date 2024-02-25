import { generateId } from "../../utils/generateId.js";
import { Room, players, rooms } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";
import { wsServer } from "../ws.js";
import { WebSocket } from "ws";
import { updateRooms } from "./update_room.js";

export const createRoom = (ws: WsWithId) => {
  const newRoom: Room = {
    roomId: generateId(),
    roomUsers: [],
  };
  rooms.push(newRoom);
  const player = players.find((p) => p.id === ws.id);
  if (player) {
    newRoom.roomUsers.push({ name: player.name, index: player.id });
  }
  //   const response = {
  //     type: "create_room",
  //     data: "",
  //     id: 0,
  //   };
  updateRooms(ws);
  //   wsServer.clients.forEach((client: WebSocket) => {
  //     if (client.readyState === WebSocket.OPEN) {
  //       client.send(JSON.stringify(response));
  //     }
  //   });
};
