import React from 'react';
import { theme } from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
          <Layout />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
