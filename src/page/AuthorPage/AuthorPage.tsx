const data = {
    id: 0,
    avatar: "./images/avatar.png",
    name: "Awqel a`j",
    description: "aSDkjalskdja aLKSJD ALKSJD ALKSDJ aKLSJD aksldj",
};

import { useState } from "react";
import { useParams } from "react-router-dom";
import LanguageStorage from "../../storage/languageStorage/languageStorage";
import style from "./AuthorPage.module.css";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainMenu from "../../components/MainMenu/MainMenu";
import PickLanguageBlock from "../../components/PickLanguageBlock/PickLanguageBlock";

const AuthorPage = () => {
    // const {id} = useParams();
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
                isAuthor={true}
                toggleMenu={() => toggleMenu()}
                title="Немой"
                buttonText={LanguageStorage.GetPhrase("libraryHeaderText")}
                buttonFunc={() => console.log("qwe")}
            />    
            <PickLanguageBlock 
                lang={lang}
                setLang={(value) => setLang(value)}
            />
        </main>
    );
};

export default AuthorPage;
