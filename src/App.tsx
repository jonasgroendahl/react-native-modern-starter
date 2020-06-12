import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './router/Navigation';
import {ThemeProvider} from 'react-native-paper';
import {RootContextProvider} from './context/RootContext';
import {LanguageProvider} from './context/LanguageContext';
import {theme} from './styles/theme';

const App: React.FC = () => {
  return (
    <RootContextProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </LanguageProvider>
    </RootContextProvider>
  );
};

export default App;
