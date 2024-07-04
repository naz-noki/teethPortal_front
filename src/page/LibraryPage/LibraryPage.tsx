import { useState } from "react";
import style from "./LibraryPage.module.css";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";
import languageStorage from "../../storage/languageStorage/languageStorage";
import MainMenu from "../../components/MainMenu/MainMenu";
import MainHeader from "../../components/MainHeader/MainHeader";
import AuthorsList from "../../components/AuthorsList/AuthorsList";
import { useNavigate } from "react-router-dom";

const LibraryPage = () => {
    const [lang, setLang] = useState(languageStorage.GetLang());
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    const goToMapPage = () => {
        navigate('/', {
            replace: true
        });
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
            title="Library"
            buttonText={languageStorage.GetPhrase("libraryHeaderText")}
            buttonFunc={() => goToMapPage()}
        />     
        <AuthorsList />
        <PickLanguageBlock 
            lang={lang}
            setLang={(value) => setLang(value)}
        />
        </main>
    );
};

export default LibraryPage;
