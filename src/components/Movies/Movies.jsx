import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constans/data";
import {useContext, useState} from 'react';
import MoviesContext from "../context/MoviesContext";


function Movies(props) {
// const {movies, setMovies} = props;


const {title = "Lates Movies"} = props;
const {movies} = useContext(MoviesContext)

  function handleClick(){
    const movie = {
    id: "xyz", title: "Jigsaw",
    year: 2022, type: "Movie",
    poster: "https://picsum.photos/200/300?grayscale",
  };
  // setMovies([...movies,movie]);
}

  return (
  <div className={styles.container}>
    <section className={styles.movies}>
      <div className={styles.movies__header}>
        <h2 className={styles.movies__title}>🎬 Latest Movies</h2>
        <button className={styles.addButton} onClick={handleClick}>
          + Add Movie
        </button>
      </div>

      <div className={styles.movie__container}>
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <p className={styles.empty}>No movies available yet.</p>
        )}
      </div>
    </section>
  </div>
);

}

export default Movies;
