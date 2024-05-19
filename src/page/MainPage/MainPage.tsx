import { useState } from "react";
import style from "./MainPage.module.css";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import MapBlock from "../../components/MapBlock/MapBlock";

const MainPage = () => {
    const [continueFlag, setContinueFlag] = useState(false);

    
    return (
        <main className={style.mainBlock}>
        {
            !continueFlag 
            ? <WelcomeBlock 
                setContinueFlag={(value) => setContinueFlag(value)}
            />
            : <MapBlock />
        }
        </main>
    );
};

export default MainPage;
