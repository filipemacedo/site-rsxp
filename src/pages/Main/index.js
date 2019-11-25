import React, { useRef } from "react";

import { Container, Wrapper, CardGrid } from "./main.styles";
import CardMsg from "../../components/CardMsg";
import Loading from "../../components/Loading";
import { useTweets } from "../../hooks/tweets.hook";
import { useOnNewTweet } from "../../hooks/on-new-tweet.hook";
import CardModal from "../../components/CardModal";
import { useTimeout } from "../../hooks/timeout.hook";

export default function App() {
  const [tweets, setTweets] = useTweets();
  const isDisabledLoadind = useTimeout(1800);

  const addNewTweet = tweet => setTweets([tweet, ...tweets.slice(0, 20)]);

  useOnNewTweet({ addNewTweet, tweets });

  const hasTweets = tweets.length;
  const isLoading = !hasTweets || !isDisabledLoadind;

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CardModal />
          <Wrapper>
            <CardGrid>
              {tweets.map((props, index) => (
                <CardMsg {...props} timeToShow={index * 200} />
              ))}
            </CardGrid>
          </Wrapper>
        </>
      )}
    </Container>
  );
}
