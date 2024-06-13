import language from "./language";
import * as types from "./language.types";


class LanguageStorage {
    constructor() {

    };

    GetPhrase<T extends keyof types.I_Language>(key: T): string {
        const currentLang = this.GetLang();
        const lang = language[currentLang];
        
        return lang[key];        
    };

    GetLang(): types.T_LanguageKey {
        const currentLang = localStorage.getItem("lang");
        
        if(currentLang === null || !types.IsLanguageKey(currentLang)) {
            localStorage.setItem("lang", "ru");
            return "ru";
        };

        return currentLang;
    };

    SetLang(value: types.T_LanguageKey) {
        localStorage.setItem("lang", value);
    };
};

export default new LanguageStorage();