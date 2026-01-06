import { useEffect, useState } from "react";
import ShowCard from "../components/ShowCard";


// common sttucture of the TV show grid 
function TVList({ title, fetchData }) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((res) => {
      setShows(res);
      setLoading(false);
    });
  }, [fetchData]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="HomePage">
      <h2>{title}</h2>
      <div className="movieInGrid">
        {shows.map((show) => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
    </div>
  );
}

export default TVList;
