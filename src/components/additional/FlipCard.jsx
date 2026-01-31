import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="heading text-center my-3">{data.name}</p>
        <img
          className="card-image"
          src={data.image}
          alt={data.name}
        />
        <p className="text-center">{data.post}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 284px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden; /* prevents blur from overflowing */
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.03); /* subtle hover zoom */
  }

  /* Background gradient layer */
  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 284px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Blur glow layer */
  .card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: scale(0.95);
    filter: blur(15px); /* reduced blur for performance */
    z-index: -1;
    pointer-events: none;
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .card:hover::after {
    filter: blur(25px); /* slightly increase on hover */
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.2) scaleY(0.8); /* lighter transform for performance */
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    z-index: 1;
    color: #fff;
  }

  .card-image {
    width: 100%;
    height: 170px; /* fixed height for performance */
    object-fit: cover;
    border-radius: 6px;
  }

  .card p:not(.heading) {
    font-size: 14px;
    color: #fff;
    z-index: 1;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
    z-index: 1;
  }
`;

export default React.memo(Card);
