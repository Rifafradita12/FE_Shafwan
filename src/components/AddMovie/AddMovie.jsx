import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";
import { useNavigate } from "react-router-dom";

function AddMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    date: ""
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  const navigation = useNavigate();
  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validate() {
    const { title, date } = formData;

    if (title.trim() === "") {
      setIsTitleError(true);
      return false;
    } else if (date.trim() === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else {
      setIsDateError(false);
      setIsTitleError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: crypto.randomUUID(),
      title: formData.title,
      year: formData.date,
      type: "Movie",
      poster: "https://picsum.photos/200/300"
    };

    setMovies([...movies, movie]);
    navigation("/");

    // // Reset
    // setFormData({ title: "", date: "" });
  }

  const {title, date} = formData;

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Masukkan Judul Film"
        />
        {isTitleError && <Alert>Judul tidak boleh kosong</Alert>}

        <input
          className={styles.input_form}
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Masukkan Tahun Rilis"
        />
        {isDateError && <Alert>Tanggal tidak boleh kosong</Alert>}

        <button className={styles.button_form}>Tambah Film</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
