import { generateId } from "../../utils/generateId.js";
import { players, rooms } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";

export const addUserToRoom = (data: any, ws: WsWithId) => {
  const { indexRoom } = JSON.parse(data);
  const freeRoom = rooms.find(
    (room) => room.roomId === indexRoom && room.roomUsers.length < 2
  );
  const roomWithTwoPlayers = rooms.find(
    (room) => room.roomId === indexRoom && room.roomUsers.length === 2
  );
  const player = players.find((p) => p.id === ws.id);
  console.log(freeRoom);

  const response = {
    type: "create_game",
    data: JSON.stringify({
      idGame: generateId(),
      idPlayer: player?.id,
    }),
    id: 0,
  };
  ws.send(JSON.stringify(response));
};
