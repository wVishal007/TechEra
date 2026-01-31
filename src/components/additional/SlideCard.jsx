import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content front">
          <span className="post">{data.post}</span>
          <span className="name">{data.name}</span>
          <img src={data.image} alt={data.name} className="image" />
        </div>
        <div className="content back">
          <span className="bio">{data.bio || "No bio provided"}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  perspective: 1000px; /* Enable 3D effect for flip */

  .card {
    width: 190px;
    height: 254px;
    border-radius: 10px;
    background: rgb(103, 225, 255);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.7);
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease, background 0.4s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05) rotateY(180deg); /* GPU-accelerated flip + scale */
    background: rgb(103, 151, 255);
  }

  .content {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: opacity 0.4s ease;
  }

  .front {
    z-index: 2;
  }

  .back {
    transform: rotateY(180deg); /* flip backside */
    background: rgb(103, 151, 255);
    z-index: 1;
  }

  .image {
    width: 80%;
    height: 120px;
    object-fit: cover;
    margin: 0.5rem 0;
    border-radius: 6px;
  }

  .post {
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }

  .bio {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    padding: 0 8px;
  }
`;

export default React.memo(Card);
