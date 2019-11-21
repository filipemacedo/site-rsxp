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
  const listenerCallbackToAddTweet = ({ tweet }) => {
    const { text, user } = tweet;

    const {
      screen_name: userScreenName,
      profile_image_url_https: userImage
    } = user;

    return addNewTweet({ userScreenName, userImage, text });
  };

  useEffect(() => {
    onNewTweet(listenerCallbackToAddTweet);

    return () => socket.removeAllListeners();
  }, [tweets]);
}
