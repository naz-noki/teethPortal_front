import { FC } from "react";
import LanguageStorage from "../../storage/languageStorage/languageStorage";
import * as LangTypes from "../../storage/languageStorage/language.types";
import * as types from "./PickLanguageBlock.types";
import style from "./PickLanguageBlock.module.css";

const Languages = LanguageStorage.GetAllLang();

const PickLanguageBlock: FC<types.I_PickLanguageBlockProps> = ({
    pageNumber,
    lang,
    setLang,
}) => {
    const setNewLang = (value: LangTypes.T_LanguageKey) => {
        setLang(value);
        LanguageStorage.SetLang(value);
    };

    return (
        <section className={style.block}>
            <div className={style.block__number}>
                {LanguageStorage.GetPhrase("textForPageNumber")}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pageNumber}
            </div>
            <section className={style.block__lang}></section>
        {
            Languages.map((el, idx) => 
                <button 
                    key={idx}
                    className={`
                        ${lang === el ? style.item__active : style.item}
                    `}
                    onClick={() => setNewLang(el)}
                >
                {
                   el === "ru" 
                        ? "ру"
                        : el
                }
                </button>
            )
        }
        </section>
    );
};

export default PickLanguageBlock;
