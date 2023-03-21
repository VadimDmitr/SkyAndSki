import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  position: fixed;
  z-index: 10;
  transform: ${({ openMobileMenu }) =>
    openMobileMenu ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 15.5rem;
  transition: transform 0.3s ease-in-out;

  li {
    width: fit-content;
    padding-bottom: 4px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
    border-bottom: 0;
  }

  li:hover {
    font-weight: 800;
    border-bottom: 1px solid #fff;
    transition: font-weight 0.25s ease-in-out, border-bottom 0.25s ease-in-out;
  }
`;

export const MobileMenu = ({ openMobileMenu, setOpenMobileMenu }) => {
  const navLinksData = ["register", "login"];

  const navLinks = navLinksData.map((navLink, index) => (
    <Link
      key={index}
      style={{
        padding: "2.2rem 3.5rem",
        display: "flex",
        justifyContent: "center",
      }}
      to="/"
    >
      <li>{navLink}</li>
    </Link>
  ));

  return <Ul openMobileMenu={openMobileMenu}>{navLinks}</Ul>;
};
