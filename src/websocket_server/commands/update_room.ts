import { rooms } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";

export function updateRooms(ws: WsWithId) {
  const response = {
    type: "update_room",
    data: JSON.stringify(rooms),
    id: 0,
  };
  ws.send(JSON.stringify(response));
}
