import { createContext, useState } from "react";

export const LanguageContext = createContext({});

export function LanguageContextProvider({ children }) {
    const [language, toggleLanguage] = useState('nl')

    function changeLanguage() {
        return language === 'nl' ? toggleLanguage('es') : toggleLanguage('nl');
    }
    const data = {
        activeLanguage: language,
        changeLanguage: changeLanguage,
    };

    return(
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    );
}

export default LanguageContextProvider;