import React from "react";
import styled from "styled-components";

const Card = ({ number }) => {
  return (
    <StyledWrapper>
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">{number}+</div>
          <div>Members</div>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outer {
    width: 300px;
    height: 250px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
    overflow: hidden; /* prevent overflow from shadows */
  }

  .dot {
    width: 6px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px #fff;
    border-radius: 50%;
    top: 10%;
    right: 10%;
    z-index: 2;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(calc(-100% + 35px), 0);
    }
    50% {
      transform: translate(calc(-100% + 35px), calc(100% - 30px - 10%));
    }
    75% {
      transform: translate(0, calc(100% - 30px - 10%));
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background: radial-gradient(circle 280px at 0% 0%, #444444 0%, #0c0d0d 80%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
  }

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: rgba(199, 199, 199, 0.4);
    box-shadow: 0 0 25px #fff;
    filter: blur(6px);
    transform-origin: 10%;
    top: 0;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 4rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text; /* for Safari */
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;

export default React.memo(Card);
