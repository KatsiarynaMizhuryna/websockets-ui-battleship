import { httpServer } from "./src/http_server/index.js";
import { wsServer } from "./src/websocket_server/ws.js";

const HTTP_PORT = Number(process.env.HTTP_PORT) || 8181;
const WS_PORT = Number(process.env.WS_PORT) || 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
wsServer.on("listening", () => {
  console.log(`Start static ws server on the ${WS_PORT} port!`);
});
