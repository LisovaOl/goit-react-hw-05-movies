import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <h1>Search</h1>
      <input type="text" />
      <Outlet />
    </div>
  );
};
