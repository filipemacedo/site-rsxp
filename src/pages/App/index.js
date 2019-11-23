import React, { useState } from "react";

import { Container, Wrapper, CardGrid } from "./app.styles";
import CardMsg from "../../components/CardMsg";
import Loading from "../../components/Loading";
import { useTweets } from "../../hooks/tweets.hook";
import { useOnNewTweet } from "../../hooks/on-new-tweet.hook";
import CardModal from "../../components/CardModal";

export default function App() {
  const [tweets, setTweets] = useTweets();
  const [showModal, setShowModal] = useState(true);
  console.log(tweets);
  const addNewTweet = tweet => setTweets([tweet, ...tweets]);

  useOnNewTweet({ addNewTweet, tweets });

  return (
    <Container>
      <CardModal setShowModal={setShowModal} showModal={showModal} />
      <Loading/>
      <Wrapper>
        <CardGrid>
          {tweets.map(props => (
            <CardMsg
              {...props}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          ))}
        </CardGrid>
      </Wrapper>
    </Container>
  );
}
