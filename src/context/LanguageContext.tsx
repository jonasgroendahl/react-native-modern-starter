import React, {useEffect, useState, useContext} from 'react';
import * as RNLocalize from 'react-native-localize';

type ContextProps = {};

const LanguageContext = React.createContext<ContextProps>({} as ContextProps);

const translationGetters: any = {
  en: () => require('../lang/en.json'),
};

const DEFAULT_LANGUAGE = 'en';

export const LanguageProvider: React.FC = ({children}) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const fallback = {languageTag: DEFAULT_LANGUAGE, isRTL: false};
    const {languageTag} =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;

    setLanguage(languageTag);
  }, []);

  const value = {
    ...translationGetters[language](),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
