import { FC, useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import * as types from "./SearchBar.types";
import languageStorage from "../../storage/languageStorage/languageStorage";
import imagesStorage from "../../storage/imagesStorage/imagesStorage";

const SearchBar: FC<types.I_SearchBarProps> = ({
    hints,
    swapHintDelay,
    cb,
}) => {
    const [hint, setHint] = useState(languageStorage.GetPhrase("searchBarPlaceholder"));

    const swapHint = () => {
        let counter = 0;

        return () => {
            counter++;
            
            if(counter !== 9) {
                setHint(hints[ Math.floor(Math.random() * hints.length) ]); 
                return;
            };

            counter = 0;
            setHint(languageStorage.GetPhrase("searchBarPlaceholder")); 
        };
    };
    
    useEffect(() => {
        const intervalId = setInterval(swapHint(), swapHintDelay);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return ( 
        <div className={style.block}>   
            <img 
                className={style.block__icon}
                src={imagesStorage.searchBarElementImage} 
                alt="search icon" 
            />
            <input 
                type="text" 
                name="Search / filter input" 
                className={style.block__inp}
                placeholder={hint}
                onChange={(e) => cb(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
