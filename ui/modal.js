"use client"

import Image from "next/image"
import styled from "styled-components"

const ModalStyled = styled.aside`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${(props) => props.$visibility || "hidden"};
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #00000052;
  backdrop-filter: blur(10px);
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ModalCard = styled.div`
  transition: 0.3s all ease-in-out;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;

  width: ${(props) => props.$width || "0"};
  /* height: ${(props) => props.$height || "0"}; */
  border: 1px solid #ffffff22;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 0 30px 0;
  gap: 1rem;
  & img {
    width: clamp(18.75rem, 18.868vw + 14.269rem, 31.25rem);

    object-fit: cover;
    border-radius: 20px;
  }
`
export default function Modal({ title, info, showModal, handleClick, image }) {
  return (
    <ModalStyled
      $display={showModal ? "flex" : "none"}
      onClick={handleClick}
      $visibility={showModal ? "visible" : "hidden"}
    >
      <ModalCard
        $width={
          showModal ? "clamp(21.875rem, 23.585vw + 16.274rem, 37.5rem)" : "0"
        }
        $height={showModal ? "auto" : "0"}
      >
        <Image src={image} alt={title} width={500} height={500} />
        <h2>{title}</h2>
        <p>{info}</p>
      </ModalCard>
    </ModalStyled>
  )
}
