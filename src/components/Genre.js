import Movie from "./Movie";
import "./../Genre.css";

const Genre = ({ name, description, movieTitle1, movieTitle2 }) => {
  return (
    <div className="Genre">
      <h2>{name}</h2>
      <p>{description}</p>
      <Movie title={movieTitle1.title} year={movieTitle1.year} />
      <Movie title={movieTitle2.title} year={movieTitle2.year} />
    </div>
  )
}

export default Genre;
