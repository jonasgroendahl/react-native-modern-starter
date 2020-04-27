import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './router/Navigation';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import {RootContextProvider} from './context/RootContext';
import {LanguageProvider} from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <RootContextProvider>
      <LanguageProvider>
        <StyleProvider style={getTheme(material as any)}>
          <Navigation />
        </StyleProvider>
      </LanguageProvider>
    </RootContextProvider>
  );
};

export default App;
