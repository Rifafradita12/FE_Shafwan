import { useState } from "react";
import Navbar from '../components/navbar/navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
import Counter from '../components/Counter';
import AddMovieForm from '../components/AddMovie/AddMovie';
import data from '../utils/constans/data';
import Button from "../components/UI/button/Index";



function Home({movies}) {

    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data);
    return(
        <div>
            {/* <Navbar /> */}
            <main>
                <Hero />
                {/* <Button variant="primary">Lihat</Button>
                 <Button variant="secondary" full>Lihat</Button> */}
                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies title="lates Movie" movies={movies}/>
                {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
                {/* <Counter /> */}
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;