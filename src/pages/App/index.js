import React from "react";

import { Container, Wrapper, CardGrid } from "./app.styles";
import CardMsg from "../../components/CardMsg";
import { useTweets } from "../../hooks/tweets.hook";
import { useOnNewTweet } from "../../hooks/on-new-tweet.hook";

export default function App() {
  const [tweets, setTweets] = useTweets();

  const addNewTweet = tweet => setTweets([tweet, ...tweets]);

  useOnNewTweet({ addNewTweet, tweets });

  return (
    <Container>
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
