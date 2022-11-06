import { Link, Outlet } from 'react-router-dom';

export const MoviesId = () => {
  return (
    <div>
      <h1>MoviesId</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
