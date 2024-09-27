import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/acm.svg";

const Container = styled.div`
  position: fixed;
  z-index: 11; /* Increased z-index */
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0; /* Darker shade of white */
  width: 4rem; /* Increased width */
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 0; /* Remove padding to eliminate unwanted spacing */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Darkened box shadow */
`;

const Logo = styled.div`
  width: 4rem; /* Increased width for the logo */
  margin-bottom: 1rem; /* Added margin for spacing */

  img {
    width: 100%;
    height: auto; /* Keep aspect ratio */
    max-height: 4rem; /* Increased maximum height */
  }
`;

const SlickBar = styled.ul`
  color: black; /* Changed text color to black */
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0; /* Changed background to match sidebar */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  position: absolute;
  top: 6rem; /* Ensure this doesn't cause unwanted spacing */
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "4rem")}; /* Adjusted width */
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: black; /* Changed link color to black */
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;

  &:hover {
    background-color: rgba(0, 0, 255, 0.1); /* Hover effect */
    border-right: 4px solid blue; /* Blue border on hover */
  }

  svg {
    width: 1.2rem;
    height: auto;
    filter: invert(0%); /* Changed icon color to dark blue */
    transition: filter 0.3s ease;

    &:hover {
      filter: invert(40%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%); /* Change color on hover */
    }
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const NavBarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button clicked={click} onClick={handleClick}></Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item onClick={() => setClick(false)} exact activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Text clicked={click}>Events</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/our-team">
            <FontAwesomeIcon icon={faUsers} />
            <Text clicked={click}>Team</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/contact-us">
            <FontAwesomeIcon icon={faFileAlt} />
            <Text clicked={click}>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;