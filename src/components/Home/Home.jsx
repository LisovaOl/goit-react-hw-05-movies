import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Trends</h1>

      <ul>
        <li>
          <a href="#">film</a>
        </li>
        <li>
          <a href="#">film</a>
        </li>

        <li>
          <a href="#">film</a>
        </li>

        <li>
          <a href="#">film</a>
        </li>

        <li>
          <a href="#">film</a>
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
