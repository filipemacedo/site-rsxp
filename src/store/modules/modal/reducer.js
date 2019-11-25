export const initialStateModalStore = {
  isOpened: false,
  tweetInformations: {}
};

export default (state = initialStateModalStore, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS_OPEN_MODAL":
      return {
        ...state,
        isOpened: action.status
      };

    case "SET_TWEET_INFORMATIONS":
      return {
        ...state,
        tweetInformations: action.tweetInformations
      };

    default:
      return state;
  }
};
