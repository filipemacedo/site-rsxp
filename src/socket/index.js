import socket from "socket.io-client";
import { HOST } from "../config/host";

const io = socket.connect(HOST);

export default io;
