import axios from "axios";

const API_TOKEN_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNkNDc0NjQyZjk1M2U0M2I5NGQwZDI4NDgwYWYxYiIsInN1YiI6IjY2NmEwZmE2YmVlMGZiOWM3NjViNDNmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sCihbJ5dBUYpuhmiiPwnB0YTyDhDfacDgAI_GauCdIQ";
axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN_KEY}`;

export async function fetchMovieTrending() {
  const response = await axios.get("/3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data;
}
export async function getMovieID(searchId) {
  const url = `/3/movie/${searchId}`;

  const response = await axios.get(url);

  return response.data;
}

export async function getMovieCast(searchId) {
  const url = `3/movie/${searchId}/credits`;

  const response = await axios.get(url);
  return response.data;
}

export async function getMovieReviews(searchId) {
  const url = `3/movie/${searchId}/reviews`;

  const response = await axios.get(url);
  return response.data;
}

export async function getMovieBySearch(query) {
  const url = `/3/search/movie`;

  const response = await axios.get(url, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });

  return response.data;
}
