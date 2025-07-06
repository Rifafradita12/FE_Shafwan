import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../Button/Index";
import axios from "axios";

const StyledHero = styled.section`
  margin: 2rem 1rem;
  padding: 2rem;
  border-radius: 20px;
  background-color:rgba(228, 235, 191, 0.77);
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
  }

 h2 {
  color: #4361ee;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: color 0.3s ease, transform 0.3s ease;
}

h2:hover {
  color: #364fc7;
  transform: translateY(-5px);
}

h3 {
  color: #b5179e;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: color 0.3s ease, transform 0.3s ease;
}

h3:hover {
  color: #9d1458;
  transform: translateY(-3px);
}


  p {
  color:rgb(15, 14, 14);
  font-size: 1.05rem;
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: justify;
  background: linear-gradient(to right,rgb(216, 175, 175), #ffffff);
  padding: 1rem;
  border-left: 4px solidrgb(109, 118, 158);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

p:hover {
  background: linear-gradient(to right,rgb(106, 171, 218), #fff);
  transform: translateY(-2px);
}


  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 3rem;
    margin: 4rem auto;
    max-width: 1200px;
  }
`;

function Hero() {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovies() {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(url);
      return response.data.results[0];
    }

    async function fetchDetailMovie() {
      const trending = await fetchTrendingMovies();
      const detailUrl = `https://api.themoviedb.org/3/movie/${trending.id}?api_key=${API_KEY}&append_to_response=videos`;
      const response = await axios(detailUrl);
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  if (!movie) return null;

  return (
    <StyledHero>
      <div className="left">
        <h2>{movie.title || "Untitled Movie"}</h2>
        <h3>
          Genre:{" "}
          {movie.genres?.length
            ? movie.genres.map((g) => g.name).join(", ")
            : "Unknown"}
        </h3>
        <p>{movie.overview || "No description available."}</p>
        <Button size="md" variant="primary">
          Watch
        </Button>
      </div>
      <div className="right">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </StyledHero>
  );
}

export default Hero;
