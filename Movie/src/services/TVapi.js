const API_KEY = "390f526cff5d58b2757663a7a41c9b1e";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularTV = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getTopRatedTV = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getAiringTodayTV = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getOnTV = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
