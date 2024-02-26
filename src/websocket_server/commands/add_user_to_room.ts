import { generateId } from "../../utils/generateId.js";
import { Game, games, players, rooms } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";
import { wsServer } from "../ws.js";
import { updateRooms } from "./update_room.js";
import { WebSocket } from "ws";

export const addUserToRoom = (data: any, ws: WsWithId) => {
  const { indexRoom } = JSON.parse(data);
  const player = players.find((p) => p.id === ws.id);
  const freeRoom = rooms.find(
    (room) => room.roomId === indexRoom && room.roomUsers.length < 2
  );
  if (player && freeRoom) {
    freeRoom.roomUsers.push({ name: player.name, index: player.id });
  }
  if (freeRoom?.roomUsers.length === 2) {
    const currentGame: Game = {
      gameId: generateId(),
      ships: [],
      indexPlayer: player?.id,
    };
    games.push(currentGame);
    const response = {
      type: "create_game",
      data: JSON.stringify({
        idGame: currentGame.gameId,
        idPlayer: currentGame.indexPlayer,
      }),
      id: 0,
    };
    updateRooms();
    wsServer.clients.forEach((client: WebSocket) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(response));
      }
    });
  }
};
