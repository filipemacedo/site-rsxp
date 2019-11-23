export const toggleStatusOpenModal = status => ({
  type: "TOGGLE_STATUS_OPEN_MODAL",
  status
});

export const setTweetInformations = props => ({
  type: "SET_TWEET_INFORMATIONS",
  tweetInformations: props
});
