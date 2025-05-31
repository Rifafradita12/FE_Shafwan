// import styles from "./Footer.module.css";

import styled from "styled-components";

const Container = styled.div`
  background-color: #222;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-size: 1rem;
`;

function Footer() {
  return (
    <Container>
      <Title>Movie App</Title>
      <Author>Dibuat oleh Rifa Fradita Safara</Author>
    </Container>
  );
}

export default Footer;
