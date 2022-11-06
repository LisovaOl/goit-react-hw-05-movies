import { Outlet } from 'react-router-dom';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="100px 1fr">
      <div>Home</div>
      <div>Movies</div>
      <Outlet />
    </Box>
  );
};
