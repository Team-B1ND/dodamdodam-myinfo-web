import React,{StrictMode} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Routes from 'Router/Router';
import { B1ndToastContainer } from '@b1nd/b1nd-toastify';
import ThemeProviderContainer from 'components/common/ThemeProviderContainer';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

function Root() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProviderContainer>
            <B1ndToastContainer autoClose={1000} limit={1} />
              <BrowserRouter>
                <Routes/>
              </BrowserRouter>
            </ThemeProviderContainer>
          </RecoilRoot>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default Root;
