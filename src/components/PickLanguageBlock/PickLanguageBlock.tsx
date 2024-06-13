import { FC } from "react";
import LanguageStorage from "../../storage/languageStorage/languageStorage";
import * as LangTypes from "../../storage/languageStorage/language.types";
import * as types from "./PickLanguageBlock.types";
import style from "./PickLanguageBlock.module.css";

const Languages = LanguageStorage.GetAllLang();

const PickLanguageBlock: FC<types.I_PickLanguageBlockProps> = ({
    lang,
    setLang,
}) => {
    const setNewLang = (value: LangTypes.T_LanguageKey) => {
        setLang(value);
        LanguageStorage.SetLang(value);
    };

    return (
        <section className={style.block}>
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
