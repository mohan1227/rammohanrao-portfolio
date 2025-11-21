import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getTheme } from './theme/theme';
import Portfolio from './pages/Index';

const ThemedApp = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);

export default App;
