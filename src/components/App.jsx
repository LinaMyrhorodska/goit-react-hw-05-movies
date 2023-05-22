import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route element={<div>Layout</div>} >
      <Route index element={<div>Home</div>} />
      <Route path="/movies" element={<div>Movies</div>} />
      <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
        <Route path="cast" element={<div>Cast</div>} />
        <Route path="review" element={<div>Review</div>} />
      </Route>
      </Route> 
    </Routes>
  );
};

