import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';

import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <img src={logo} alt="Mycontacts" />

        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
