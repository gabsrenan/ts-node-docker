import { debug } from "console";
import http from "http";
import { app } from "../src/index";
import global from "./config/config";

const onError = async (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  } 
  const bind =
    typeof global.PORT === "string"
      ? "Pipe " + global.PORT
      : "Port " + global.PORT;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = async (error: any) => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on" + bind + global.Cat);
};
const server: any = http.createServer(app);
server.listen(global.PORT);
server.on("error", onError);
server.on("listening", onListening);


