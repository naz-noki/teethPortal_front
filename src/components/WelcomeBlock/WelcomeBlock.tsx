import { FC , useState, useEffect } from "react";
import style from "./WelcomeBlock.module.css"; 
import * as types from "./WelcomeBlock.types";

const WelcomeBlock: FC<types.I_WelcomeBlockProps> = ({
    setContinueFlag,
}) => {
    const [animationFlag, setAnimationFlag] = useState(false);

    const continueFunc = () => {
        setAnimationFlag(true);
        setTimeout(() => {
            setContinueFlag(true);
        }, 1500);
    };

     
    return (
        <section className={style.main}>
            <img 
                onClick={() => continueFunc()}
                src="./images/welocome__image.png"
                className={`
                    ${style.block} 
                    ${animationFlag && style.block_active}
                `}
            />
        </section>
    );
};

export default WelcomeBlock;
