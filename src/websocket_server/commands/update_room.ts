import { rooms } from "../../utils/models.js";
import { wsServer } from "../ws.js";
import { WebSocket } from "ws";

export function updateRooms() {
  const response = {
    type: "update_room",
    data: JSON.stringify(rooms),
    id: 0,
  };
  wsServer.clients.forEach((client: WebSocket) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(response));
    }
  });
}
