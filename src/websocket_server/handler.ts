import { WsWithId } from "../utils/types.js";
import { addUserToRoom } from "./commands/add_user_to_room.js";
import { createRoom } from "./commands/create_room.js";
import { reg } from "./commands/reg.js";

export const handler = (data: any, ws: WsWithId) => {
  switch (data.type) {
    case "reg":
      console.log("reg:", data.type);
      reg(ws, data.data);
      break;
    case "create_room":
      console.log("reg:", data.type);
      createRoom(ws);
      break;
    case "add_user_to_room":
      console.log(data.data);
      addUserToRoom(data.data, ws);
      break;
    default:
      console.log("ERROR", data.type);
      break;
  }
};
