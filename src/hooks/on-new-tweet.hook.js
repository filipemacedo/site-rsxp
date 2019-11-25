import { useEffect } from "react";
import { onNewTweet } from "../socket/tweets.socket";
import socket from "../socket";

/**
 * This hook is responsible for
 * invoke tweet listener
 *
 * @param {Function} setTweets
 * @param {object[]} tweets
 */
export function useOnNewTweet({ addNewTweet, tweets }) {
  useEffect(() => {
    onNewTweet(({ tweet }) => addNewTweet(tweet));

    return () => socket.removeAllListeners();
  }, [tweets]);
}
