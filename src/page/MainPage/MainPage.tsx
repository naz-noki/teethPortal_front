import { useState } from "react";
import style from "./MainPage.module.css";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import MapBlock from "../../components/MapBlock/MapBlock";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";
import languageStorage from "../../storage/languageStorage/languageStorage";

const MainPage = () => {
    const [continueFlag, setContinueFlag] = useState(false); 
    const [lang, setLang] = useState(languageStorage.GetLang());
    
    return (
        <main className={style.mainBlock}>
        {
            !continueFlag 
            ? <WelcomeBlock 
                setContinueFlag={(value) => setContinueFlag(value)}
            />
            : <MapBlock />
        }
        {
            continueFlag &&
            <PickLanguageBlock 
                lang={lang}
                setLang={(value) => setLang(value)}
            />
        }
        </main>
    );
};

export default MainPage;
