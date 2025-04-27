import "./../Movie.css";

const Movie = ({ title, year }) => {
  return (
    <div className="Movie">
      <h4>{title}</h4>
      <p>Year: {year}</p>
    </div>
  )
}

export default Movie;
