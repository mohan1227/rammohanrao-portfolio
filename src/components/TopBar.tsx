import { AppBar, Toolbar, IconButton, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleSidebar } from '../store/slices/sidebarSlice';
import { toggleTheme } from '../store/slices/themeSlice';

export const TopBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" onClick={() => dispatch(toggleSidebar())} sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
          {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
