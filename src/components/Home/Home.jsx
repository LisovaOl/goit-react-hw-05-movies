import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <h1>Trends</h1>
          <Link to="#">Film</Link>
          <Link to="#">Film</Link>

          <Link to="#">Film</Link>
          <Link to="#">Film</Link>

      <Outlet />
    </div>
  );
};