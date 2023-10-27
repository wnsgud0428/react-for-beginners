import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailMovieInfo, setDetailMovieInfo] = useState();

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetailMovieInfo(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(detailMovieInfo);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <h2>&lt;{detailMovieInfo.title}&gt;</h2>
          <h2>Rating:{detailMovieInfo.rating}</h2>
          <p>{detailMovieInfo.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
