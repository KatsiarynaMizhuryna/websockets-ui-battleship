import { generateId } from "../../utils/generateId.js";
import { Room, players, rooms } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";
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
  updateRooms(ws);
};
