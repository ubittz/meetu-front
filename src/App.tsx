import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import GlobalStyle from '@@assets/styles/GlobalStyle';
import { theme } from '@@assets/styles/theme';
import Router from '@@router';
import { store } from '@@store';
import { fetcher } from '@@utils/request/utils';

import '@@assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher,
              revalidateOnFocus: false,
              revalidateOnReconnect: false,
              refreshWhenOffline: false,
              refreshWhenHidden: false,
              shouldRetryOnError(err) {
                return err.status !== 404;
              },
            }}
          >
            <GlobalStyle />
            <Router />
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
