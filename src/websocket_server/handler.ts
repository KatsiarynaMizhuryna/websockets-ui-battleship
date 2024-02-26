import { WsWithId } from "../utils/types.js";
//import { addShips } from "./commands/add_ships.js";
import { addUserToRoom } from "./commands/add_user_to_room.js";
import { createRoom } from "./commands/create_room.js";
import { reg } from "./commands/reg.js";

export const handler = (data: any, ws: WsWithId) => {
  switch (data.type) {
    case "reg":
      reg(ws, data.data);
      break;
    case "create_room":
      createRoom(ws);
      break;
    case "add_user_to_room":
      addUserToRoom(data.data, ws);
      break;
      // case "add_ships":
      // //addShips(data.data);
      // default:
      console.log("ERROR", data.type);
      break;
  }
};
