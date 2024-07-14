import { FC } from "react";
import style from "./MainHeader.module.css";
import * as types from "./MainHeader.types";
import languageStorage from "../../storage/languageStorage/languageStorage";

const MainHeader: FC<types.I_MainHeaderProps> = ({
    isAuthor,
    toggleMenu,
    title,
    buttonText,
    buttonFunc,
}) => {

    return (
        <header className={style.header}>
            <button
                onClick={() => buttonFunc()} 
                className={style.header__btn__block}
            >
                <p className={style.header__btn__text}>
                    {buttonText}
                </p>
            </button>
            <div className={style.header__title_block}>
                <h2 className={style.header__title_h2}>
                    ZONE
                </h2>
                <h1 
                    className={`${isAuthor 
                        ? style.header__title_h1_author
                        : style.header__title_h1
                    }`}
                >
                    {title}
                </h1>
            </div>
            <button
                onClick={() => toggleMenu()} 
                className={style.header__btn__block}
            >
                <p className={style.header__btn__text}>
                    {languageStorage.GetPhrase("menuButtonTitle")}
                </p>
            </button>            
        </header>
    );
};

export default MainHeader;
