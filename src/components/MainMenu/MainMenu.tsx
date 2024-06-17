import style from "./MainMenu.module.css";
import languageStorage from "../../storage/languageStorage/languageStorage";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const MenuItems = [
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
];

const MainMenu = () => {
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
            <ul className={style.menu__list}>
            {
                MenuItems.map((el, idx) => 
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
