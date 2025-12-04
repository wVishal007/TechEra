import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content flex px-4 flex-col items-center justify-center">
          <span className="text-sm">{data.post}</span>
          <span className="text-xl">{data.name}</span>
          <img src={data.image} className="object-cover my-1" alt="" />
        </div>
        <div className="second-content">
          <span>bio</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: rgb(103, 225, 255);
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    background: rgb(103, 151, 255);
  }

  .first-content {
    height: 100%;
    width: 100%;
    transition: all 0.4s;
   
    opacity: 1;
    border-radius: 15px;
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 0px;
    transform: rotate(90deg) scale(-1);
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1.8rem;
    transform: rotate(0deg);
  }
`;

export default Card;
