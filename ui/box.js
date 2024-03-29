"use client"

import { useState } from "react"
import styled from "styled-components"
import Modal from "./modal"

const GridBox = styled.article`
  cursor: pointer;
  background-color: aliceblue;
  border-radius: 20px;
  border: ${(props) => props.$borderColor || " 5px solid #878787"};
  width: ${(porps) => porps.$boxWidth || "300px"};
  height: ${(porps) => porps.$boxHeight || "300px"};
  background: url(${(porps) => porps.$bgImage || "./logo.png"});
  background-position: center;
  background-size: cover;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.5);
  /* grid-area: ${(porps) => porps.$gridId}; */
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & .info {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    text-align: center;
    color: black;
    font-weight: bold;
    padding: 1rem 2rem;
  }
  &:hover {
    background-size: 250%;
    & .info {
      opacity: 1;
      background-color: rgb(255 255 255 / 30%);
      backdrop-filter: blur(10px);
    }
  }
`
const TextBox = styled.article`
  width: ${(porps) => porps.$boxWidth || "300px"};
  height: ${(porps) => porps.$boxHeight || "300px"};
  text-align: center;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* grid-area: ${(porps) => porps.$gridId}; */
  @media screen and (min-width: 800px) {
    width: ${(porps) => porps.$pcBoxWidth || "300px"};
    height: ${(porps) => porps.$pcBoxHeight || "300px"};
  }
`
export default function Box({
  boxWidth,
  boxHeight,
  borderColor,
  bgImage,
  title,
  info,
  id,
  gridId,
  pcBoxWidth,
  pcBoxHeight,
}) {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  return bgImage !== "none" ? (
    <GridBox
      className={id}
      $boxWidth={boxWidth}
      $boxHeight={boxHeight}
      $borderColor={borderColor}
      $bgImage={bgImage}
      $gridId={gridId}
      onClick={handleClick}
    >
      <Modal
        title={title}
        info={info}
        showModal={showModal}
        handleClick={handleClick}
        image={bgImage}
      />
      <p className="info">{title}</p>
    </GridBox>
  ) : (
    <TextBox
      $gridId={gridId}
      $boxWidth={boxWidth}
      className={id}
      $boxHeight={boxHeight}
      $pcBoxHeight={pcBoxHeight}
      $pcBoxWidth={pcBoxWidth}
    >
      <h2>{title}</h2>
      <p>{info}</p>
    </TextBox>
  )
}
