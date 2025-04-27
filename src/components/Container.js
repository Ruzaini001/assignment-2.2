import Genre from "./Genre";
import "./../Container.css";

const Container = () => {
  return (
    <div className="Container">
      <h1>Movie app</h1>
      <Genre
        name="Comedy"
        description="Crazy and Chaotic, Shocking and Absurdity Humor."
        movieTitle1={{ title: "The Hangover", year: 2009 }}
        movieTitle2={{ title: "Borat", year: 2006 }}
      />
      <Genre
        name="Romance"
        description="Epic and Iconic romantic movies. Both winning multiple Academy Awards."
        movieTitle1={{ title: "Titanic", year: 1997 }}
        movieTitle2={{ title: "Forrest Gump", year: 1994 }}
      />
    </div>
  )
}

export default Container;
