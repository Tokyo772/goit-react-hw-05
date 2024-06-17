import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MoviesPage/MovieDetailsPage/MovieDetailsPage")
);
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import Navigation from "../Navigation/Navigation";

import style from "./App.module.css";
import Loader from "../Loader/Loader";

function App() {
  return (
    <div className={style.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
