import { useState } from "react";
import style from "./MainPage.module.css";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";

const MainPage = () => {
    const [continueFlag, setContinueFlag] = useState(false);

    
    return (
        <main className="mainPage">
        {
            !continueFlag 
            ? <WelcomeBlock 
                setContinueFlag={(value) => setContinueFlag(value)}
            />
            : <div className="">NOOOOO</div>
        }
        </main>
    );
};

export default MainPage;
