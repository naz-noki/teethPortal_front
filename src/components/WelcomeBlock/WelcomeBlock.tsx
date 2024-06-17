import { FC , useState } from "react";
import style from "./WelcomeBlock.module.css"; 
import * as types from "./WelcomeBlock.types";
import ImagesStorage from "../../storage/imagesStorage/imagesStorage";

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
                src={ImagesStorage.welcomeElementImage}
                className={`
                    ${style.block} 
                    ${animationFlag && style.block_active}
                `}
            />
        </section>
    );
};

export default WelcomeBlock;
