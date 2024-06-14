import * as LangTypes from "../../storage/languageStorage/language.types";

export interface I_PickLanguageBlockProps {
    pageNumber: number;
    lang: LangTypes.T_LanguageKey; 
    setLang: (value: LangTypes.T_LanguageKey) => void;
};