import { useState, useEffect } from "react";
import { findAll } from "../services/tweets.service";

/**
 * This function is responsible for
 * get all tweets on api
 * 
 * @param {Function} setTweets 
 */
const fetchTweets = async setTweets => {
  try {
    const { data } = await findAll();

    return setTweets(data);
  } catch (error) {}
};

export function useTweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets(setTweets);
  }, []);

  return [tweets, setTweets];
}
