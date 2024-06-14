import style from "./MapBlockHeader.module.css";
import languageStorage from "../../storage/languageStorage/languageStorage";

const MapBlockHeader = () => {

    return (
        <header className={style.header}>
            <button className={style.header__btn__block}>
                <p className={style.header__btn__text}>
                    {languageStorage.GetPhrase("mapHeaderText")}
                </p>
            </button>
            <div className={style.header__title_block}>
                <h2 className={style.header__title_h2}>
                    ZONE
                </h2>
                <h1 className={style.header__title_h1}>
                    Welcome
                </h1>
            </div>
            <button className={style.header__btn__block}>
                <p className={style.header__btn__text}>
                    {languageStorage.GetPhrase("menuButtonTitle")}
                </p>
            </button>            
        </header>
    );
};

export default MapBlockHeader;
