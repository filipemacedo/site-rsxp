import React, { useState, useContext } from "react";

import { Container, Wrapper, CardGrid } from "./main.styles";
import CardMsg from "../../components/CardMsg";
import Loading from "../../components/Loading";
import { useTweets } from "../../hooks/tweets.hook";
import { useOnNewTweet } from "../../hooks/on-new-tweet.hook";
import CardModal from "../../components/CardModal";

export default function App() {
  const [tweets, setTweets] = useTweets();

  const addNewTweet = tweet => setTweets([tweet, ...tweets]);

  useOnNewTweet({ addNewTweet, tweets });

  return (
    <Container>
      <CardModal />
      <Loading />
      <Wrapper>
        <CardGrid>
          {tweets.map(props => (
            <CardMsg {...props} />
          ))}
        </CardGrid>
      </Wrapper>
    </Container>
  );
}
