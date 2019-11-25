import socket from "socket.io-client";
import { HOST } from "../config/host";

const io = socket.connect(HOST);


io.on("connect", () => console.log("conectou"))

export default io;
