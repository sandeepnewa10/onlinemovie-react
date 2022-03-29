import React, { useState } from "react";
import { Container,Alert, Row } from "react-bootstrap";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/form/SearchForm";
import { CustomCard } from "./components/card/CustomCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./components/movie-list/MovieList";
import { fetchMovie } from "./components/helpers/axiosHelper";

const App = () => {
  const [movieMainList, setMovieMainList] = useState([]);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);
  

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    // console.log(value);
  };
const handleOnDelete = (imdbID) =>{
  const filteredList = movieMainList.filter(itm => itm.imdbID !== imdbID);
  setMovieList(filteredList);
  setMovieMainList(filteredList);
}

const handleOnSelect = (cat) =>{
  let filterArgs = []
  if(cat){
      filterArgs =  movieMainList.filter(itm => itm.cat === cat);
  }
  else{
    filterArgs = movieMainList;
  }
  setMovieList(filterArgs);
  //Happy selected

  //lazy selected

  //all selected
}
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const movie = await fetchMovie(search);
    setMovie(movie.data);
    setSearch("");
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };

    //adding first timse
    !movieList.length && setMovieList([obj]);

    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovieMainList([...movieMainList, obj]);
      setMovie({});
    } else {
      alert("Movie already  in list");
    }

    // setMovieList([...movieList, obj]);
    console.log(movieList);
  };



  return (
    <div className="wrapper">
      <Container fluid>
        <Title />
        <SearchForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} value={search}/>
       
          <Row>
           
              {movie?.Response === "True" && (
                <CustomCard movie={movie} fun={handleOnAddToList} />
              )}
              {movie?.Response === "False" && (
                <Alert variant="danger">{movie?.Error}</Alert>
              )}
            
          </Row>
     
        <hr className="mb-5" />
        <MovieList movieList={movieList} handleOnDelete={handleOnDelete} handleOnSelect={handleOnSelect} />
      </Container>
    </div>
  );
};

export default App;
