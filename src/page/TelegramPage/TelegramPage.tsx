import { useState } from "react";
import style from "./TelegramPage.module.css";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";
import LanguageStorage from "../../storage/languageStorage/languageStorage";
import TelegramBlock from "../../components/TelegramBlock/TelegramBlock";

const TelegramPage = () => {
    const [lang, setLang] = useState(LanguageStorage.GetLang());

    return (
        <main className={style.mainBlock}>
            <TelegramBlock />
            <PickLanguageBlock 
                lang={lang}
                setLang={(value) => setLang(value)}
            />
        </main>
    );
};

export default TelegramPage;
