import TVList from '../components/TVList';
import { getOnTV } from "../services/TVapi";

export default function TVOnTV() {
  return <TVList title="Currently On TV" fetchData={getOnTV} />;
}
