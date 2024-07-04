import { useState } from "react";
import style from "./MainPage.module.css";
import MapBlock from "../../components/MapBlock/MapBlock";
import MainHeader from "../../components/MainHeader/MainHeader";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";
import LanguageStorage from "../../storage/languageStorage/languageStorage";
import MainMenu from "../../components/MainMenu/MainMenu";

const MainPage = () => {
    const [lang, setLang] = useState(LanguageStorage.GetLang());
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };
    
    return (
        <main className={style.mainBlock}>
        {
            showMenu && 
            <MainMenu 
                toggleMenu={() => toggleMenu()}
            />
        }
            <MainHeader 
                toggleMenu={() => toggleMenu()}
                title="Welcome"
                buttonText={LanguageStorage.GetPhrase("libraryHeaderText")}
                buttonFunc={() => console.log("qwe")}
            />    
            <MapBlock />
            <div className={style.block__number}>
                {LanguageStorage.GetPhrase("textForPageNumber")}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
            </div>
            <PickLanguageBlock 
                lang={lang}
                setLang={(value) => setLang(value)}
            />
        </main>
    );
};

export default MainPage;
