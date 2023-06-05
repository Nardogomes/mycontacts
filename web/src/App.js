import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultThemes from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider value={defaultThemes}>
      <GlobalStyles />
      <h1>MyContacts</h1>
    </ThemeProvider>
  );
}

export default App;
