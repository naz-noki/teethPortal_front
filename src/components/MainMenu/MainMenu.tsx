import style from "./MainMenu.module.css";
import * as types from "./MainMenu.types";
import languageStorage from "../../storage/languageStorage/languageStorage";
import { Link } from "react-router-dom";
import { useRef, useEffect, FC, useState } from "react";

const MainMenu: FC<types.I_MainMenuProps> = ({
    toggleMenu,
}) => {
    const [menuItems, setMenuItems] = useState([
        {
            title: languageStorage.GetPhrase("menuFirstTitle"),
            path: "/library",
        },
        {
            title: languageStorage.GetPhrase("menuSecondTitle"),
            path: "/board",
        },
        {
            title: languageStorage.GetPhrase("menuThirdTitle"),
            path: "/contacts",
        },        
    ]);
    const followCursorElement = useRef<null | HTMLDivElement>(null);
    
    
    const followCursor = (e: MouseEvent, el: null | HTMLDivElement) => { 
        const target = e.target // определяем, где находится курсор
        if (
            !target || el === null
        ) return;    

        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    };

    useEffect(() => {
        window.addEventListener('mousemove', (e) => followCursor(e, followCursorElement.current));

        return () => {
            window.removeEventListener('mousemove', (e) => followCursor(e, followCursorElement.current));
        };
    }, []);

    return (
        <menu className={style.menu}>
            <div
                ref={followCursorElement} 
                className={style.menu__cursor}
            ></div>
            <button
                onClick={() => toggleMenu()} 
                className={style.menu__btn__block}
            >
                <p className={style.menu__btn__text}>
                    {languageStorage.GetPhrase("menuButtonTitle")}
                </p>
            </button>
            <ul className={style.menu__list}>
            {
                menuItems.map((el, idx) => 
                    <Link
                        to={el.path}
                        key={idx}
                        style={{textDecoration: "none"}}
                    >
                        <li 
                            className={`${
                                window.location.pathname === el.path
                                ? style.menu__item_active
                                : style.menu__item
                            }`}
                        >
                            {el.title}
                        </li>
                    </Link>
                )
            }
            </ul>
        </menu>
    );
};

export default MainMenu;
