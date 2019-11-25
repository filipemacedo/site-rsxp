import socket from ".";

export const onNewTweet = cb => socket.on("tweet", cb);
