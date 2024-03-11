import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // url에 있는 값을 반환해주는 함수
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            id={movie.id}
            title={movie.title}
            medium_cover_image={movie.medium_cover_image}
            summary={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
