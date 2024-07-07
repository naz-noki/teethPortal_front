export interface I_SearchBarProps {
    cb: (value: string) => void;
    hints: string[]; 
    swapHintDelay: number;
};