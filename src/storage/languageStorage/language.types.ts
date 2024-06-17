export type T_LanguageKey =  "ru" | "en";

export interface I_Language {
    mapElementTitle: string;
    textForPageNumber: string; 
    mapHeaderText: string;
    menuButtonTitle: string; 
    menuFirstTitle: string;
    menuSecondTitle: string;
    menuThirdTitle: string;
};

export interface I_Languages {
    ru: I_Language;
    en: I_Language;
};

export const IsLanguageKey = (value: string): value is T_LanguageKey => {
    if(value === "en" || value === "ru") return true;
    return false;
}; 
