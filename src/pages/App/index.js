import React from "react";

import { Container, Wrapper, CardGrid } from "./app.styles";
import CardMsg from "../../components/CardMsg";
import { useTweets } from "../../hooks/tweets.hook";

export default function App() {
  const [tweets, setTweets] = useTweets();

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
