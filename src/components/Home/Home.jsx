import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Trends</h1>

      <ul>
        <li>
          <a href="https://www.themoviedb.org/tv/94997-house-of-the-dragon">film</a>
        </li>
        <li>
          <a href="https://www.themoviedb.org/tv/94997-house-of-the-dragon">film</a>
        </li>

        <li>
          <a href="https://www.themoviedb.org/tv/94997-house-of-the-dragon">film</a>
        </li>

        <li>
          <a href="https://www.themoviedb.org/tv/94997-house-of-the-dragon">film</a>
        </li>

        <li>
          <a href="https://www.themoviedb.org/tv/94997-house-of-the-dragon">film</a>
        </li>
      </ul>
      {/* <Link to="#">film</Link>
          <Link to="#">film</Link>

          <Link to="#">film</Link>
          <Link to="#">film</Link> */}

      <Outlet />
    </div>
  );
};
