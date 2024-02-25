import { generateId } from "../../utils/generateId.js";
import { Player, players } from "../../utils/models.js";
import { WsWithId } from "../../utils/types.js";

export const reg = (ws: WsWithId, data: any) => {
  const { name, password } = JSON.parse(data);
  console.log(name, password);
  const player = players.find((player) => player.name === name);
  if (player) {
    const response = {
      type: "reg",
      data: JSON.stringify({
        name: name,
        index: -1,
        error: true,
        errorText: `${name} already exists`,
      }),
      id: 0,
    };
    ws.send(JSON.stringify(response));
  } else {
    ws.id = generateId();
    const newPlayer: Player = {
      id: ws.id,
      name: name,
      password: password,
      wins: 0,
    };

    players.push(newPlayer);
    const response = {
      type: "reg",
      data: JSON.stringify({
        name: newPlayer.name,
        index: newPlayer.id,
        error: false,
        errorText: "",
      }),
      id: 0,
    };

    ws.send(JSON.stringify(response));
  }
};
