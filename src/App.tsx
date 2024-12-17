import React, {Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {ErrorBoundary} from 'react-error-boundary';
import {router} from 'components/GeneralComponents/Routers';
import ErrorFallback from 'components/GeneralComponents/ErrorFallback';
import {reduxStore} from 'services/reduxStore';
import MainTheme from 'theme/index';

const App = () => (
  <Provider store={reduxStore}>
    <ThemeProvider theme={MainTheme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
);

export default App;
