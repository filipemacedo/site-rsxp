import styled from "styled-components";

export const Container = styled.div``;

export const Rocket = styled.div`
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 90px;
  z-index: 999;
  background-image: url("./Assets/rocket.svg");
  background-size: contain;
  background-repeat: no-repeat;
  animation: rocket 2s infinite linear;
  -webkit-filter: drop-shadow( 6px 8px 16px rgba(0, 0, 0, 1));
  filter: drop-shadow( 6px 8px 16px rgba(0, 0, 0, 1));

  span {
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    margin: auto;
  }

  span:nth-child(1) {
    animation: explode 0.6s infinite linear;
    background: #00F5FF;
    bottom: -10px;
    left: -15px;
    width: 30px;
    height: 30px;
  }

  span:nth-child(2) {
    animation: explode 0.5s infinite linear;
    background: #7154BC;
    bottom: -20px;
    left: 10px;
    width: 20px;
    height: 20px;
  }

  span:nth-child(3) {
    animation: explode 0.55s infinite linear;
    background: #00F5FF;
    bottom: 10px;
    left: -20px;
    width: 30px;
    height: 30px;
  }

  span:nth-child(4) {
    animation: explode 0.45s infinite linear;
    background: #7154BC;
    bottom: -10px;
    left: 20px;
    width: 30px;
    height: 30px;
  }


  span:nth-child(5) {
    animation: explode 0.7s infinite linear;
    background: #00F5FF;
    bottom: 15px;
    left: -20px;
    width: 30px;
    height: 30px;
  }


  span:nth-child(6) {
    animation: explode 0.6s infinite linear;
    background: #7154BC;
    bottom: -25px;
    left: -25px;
    width: 20px;
    height: 20px;
  }

  span:nth-child(7) {
    animation: explode 0.55s infinite linear;
    background: #00F5FF;
    bottom: -32px;
    left: -32px;
    width: 20px;
    height: 20px;
  }



  @keyframes explode {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.6);
      opacity: 1;
    }
    70% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes rocket {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    3% {
      transform: translate(200px, -200px) rotate(5deg);
    }
    6% {
      transform: translate(350px, -350px) rotate(10deg);
    }
    9% {
      transform: translate(500px, -500px) rotate(25deg);
    }
    12% {
      transform: translate(650px, -650px) rotate(40deg);
    }


    15% {
      transform: translate(740px, -660px) rotate(60deg);
    }
    18% {
      transform: translate(780px, -620px) rotate(80deg);
      opacity: 1;
    }
    21% {
      transform: translate(810px, -580px) rotate(100deg);
    }
    24% {
      transform: translate(820px, -540px) rotate(120deg);
    }
    27% {
      transform: translate(830px, -500px) rotate(140deg);
    }


    30% {
      transform: translate(830px, -460px) rotate(160deg);
    }
    33% {
      transform: translate(820px, -420px) rotate(180deg);
    }
    36% {
      transform: translate(810px, -380px) rotate(200deg);
    }
    39% {
      transform: translate(770px, -340px) rotate(220deg);
    }
    42% {
      transform: translate(750px, -320px) rotate(240deg);
    }


    45% {
      transform: translate(720px, -310px) rotate(250deg);
    }
    48% {
      transform: translate(690px, -325px) rotate(260deg);
    }
    51% {
      transform: translate(660px, -340px) rotate(270deg);
    }
    54% {
      transform: translate(640px, -360px) rotate(280deg);
    }
    57% {
      transform: translate(620px, -375px) rotate(290deg);
    }


    60% {
      transform: translate(600px, -400px) rotate(300deg);
    }
    63% {
      transform: translate(580px, -420px) rotate(310deg);
    }
    66% {
      transform: translate(565px, -435px) rotate(325deg);
    }
    69% {
      transform: translate(575px, -460px) rotate(350deg);
    }
    72% {
      transform: translate(600px, -480px) rotate(360deg);
    }
    75% {
      transform: translate(615px, -490px) rotate(370deg);
    }
    90% {
      opacity: 1;
    }

    100% {
      transform: translate(1750px, -1080px) rotate(380deg);
      opacity: 0;
    }
  }
`;
