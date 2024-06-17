import { useState } from "react";
import style from "./MainPage.module.css";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import MapBlock from "../../components/MapBlock/MapBlock";
import MapBlockHeader from "../../components/MapBlockHeader/MapBlockHeader";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";
import languageStorage from "../../storage/languageStorage/languageStorage";
import MainMenu from "../../components/MainMenu/MainMenu";

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
            : <>
                <MainMenu />
                <MapBlockHeader />    
                <MapBlock />
            </>
        }
        {
            continueFlag &&
            <PickLanguageBlock 
                pageNumber={1}
                lang={lang}
                setLang={(value) => setLang(value)}
            />
        }
        </main>
    );
};

export default MainPage;
