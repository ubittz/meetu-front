import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@@assets/styles/GlobalStyle';
import { theme } from '@@assets/styles/theme';
import Router from '@@router';
import { store } from '@@store';
import '@@assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
