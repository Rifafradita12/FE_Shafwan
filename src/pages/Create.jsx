// import Navbar from "../components/Navbar/Navbar"
// import Footer from "../components/Footer/Footer"

import AddMovieForm from "../components/AddMovie/AddMovie";
import Hero from "../components/Hero/Hero";

function CreateMovie({movies,setMovies}) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <h2>Create Movie</h2> */}
      <Hero/>
      <AddMovieForm
      movies={movies}
      setMovies={setMovies}/>
      {/* <Footer /> */}
    </>
  );
}

export default CreateMovie;
