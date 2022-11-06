import { Route, Routes, Link } from 'react-router-dom';
import { Movies } from '../Movies/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/home" end>Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/home" element={<div>Home</div>} />
        <Route path="movies" element={<Movies/>}>
          <Route path=":movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};
