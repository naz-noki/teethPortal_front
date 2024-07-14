import { FC } from "react";
import * as types from "./CounterBlock.types";
import style from "./CounterBlock.module.css";

const CounterBlock: FC<types.I_CounterBlockProps> = ({
    text,
    counter,
}) => {

    return (
        <div className={style.block__number}>
            {text}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{counter}
        </div>
    );
};

export default CounterBlock;
