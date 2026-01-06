import TVList from '../components/TVList';
import { getAiringTodayTV } from "../services/TVapi";

export default function TVAiringToday() {
  return <TVList title="Airing Today" fetchData={getAiringTodayTV} />;
}
