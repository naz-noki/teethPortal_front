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

    useEffect(() => {
        document.addEventListener("click", () => continueFunc());

        return () => {
            document.removeEventListener("click", () => continueFunc());
        };
    }, []);
     
    return (
        <section className={style.main}>
            <img 
                src="./images/welocome__image.jpg"
                className={`
                    ${animationFlag ? style.block_active : style.block}
                `}
            />
        </section>
    );
};

export default WelcomeBlock;
