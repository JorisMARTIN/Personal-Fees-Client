import { Outlet } from 'react-router';
import AppTheme from './components/theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Outlet />
    </AppTheme>
  );
}
