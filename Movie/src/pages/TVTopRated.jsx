import TVList from '../components/TVList';
import { getPopularTV } from "../services/TVapi";

export default function TVPopular() {
  return <TVList title="Popular TV Shows" fetchData={getPopularTV} />;
}
