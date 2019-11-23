import React from 'react';

import { Container, Rocket } from './loading.styles'

export default function Loading() {
  return (
    <Container>
      <Rocket>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Rocket>
    </Container>
  );
}