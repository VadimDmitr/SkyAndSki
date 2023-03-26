import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 3.3rem;
  height: 2rem;
  position: ${({ openMobileMenu }) => (openMobileMenu ? "fixed" : "absolute")};
  top: 2.5rem;
  right: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 3.3rem;
    height: 0.25rem;
    background-color #000;
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ openMobileMenu }) =>
				openMobileMenu ? "translateY(5px) rotate(45deg)" : "translateY(0) rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ openMobileMenu }) =>
				openMobileMenu ? "translateY(-5px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

export const Hamburger = ({ openMobileMenu, setOpenMobileMenu }) => {
	return (
		<Div
			className="pointer"
			openMobileMenu={openMobileMenu}
			onClick={() => setOpenMobileMenu(!openMobileMenu)}
		>
			<div />
			<div />
		</Div>
	);
};
