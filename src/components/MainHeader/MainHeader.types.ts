import { ReactElement } from "react";

export interface I_MainHeaderProps{
    toggleMenu: () => void,
    title: string,
    buttonText: string,
    buttonFunc: () => void,
    // children: ReactElement,
};