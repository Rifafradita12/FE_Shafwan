// import styles from "./Hero.module.css";
// components/Hero.jsx
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../Button";

const Container = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Genre = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 300px;
`;

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <Left>
          <Title>{movie.Title}</Title>
          <Genre>Genre: {movie.Genre}</Genre>
          <Description>{movie.Plot}</Description>
          <Button size="md">Watch</Button>
        </Left>
        <Right>
          <Poster src={movie.Poster} alt={movie.Title} />
        </Right>
      </HeroSection>
    </Container>
  );
}

export default Hero;
