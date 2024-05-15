import { FC , useState, } from "react";
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
            <div 
                className={`
                    ${animationFlag ? style.block_active : style.block}
                `}
            ></div>
            <div 
                className={style.btn}
                onClick={() => continueFunc()}
            >
                click!
            </div>
        </section>
    );
};

export default WelcomeBlock;
