// import styles from "./Navbar.module.css";
// components/Navbar.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #333;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Container>
      <Nav>
        <Brand>Movie App</Brand>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/movie/create">Add Movie</NavLink></NavItem>
          <NavItem><NavLink to="/movie/popular">Popular</NavLink></NavItem>
          <NavItem><NavLink to="/movie/now">Now Playing</NavLink></NavItem>
          <NavItem><NavLink to="/movie/top">Top Rated</NavLink></NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navbar;
