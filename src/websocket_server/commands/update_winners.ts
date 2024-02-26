import { winners } from "../../utils/models.js";
import { wsServer } from "../ws.js";
import { WebSocket } from "ws";

export const updateWinners = () => {
  const response = {
    type: "update_winners",
    data: JSON.stringify(winners),
    id: 0,
  };
  wsServer.clients.forEach((client: WebSocket) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(response));
    }
  });
};
