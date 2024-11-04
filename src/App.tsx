import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WelcomeBlock from "./components/WelcomeBlock/WelcomeBlock";
import TelegramPage from "./page/TelegramPage/TelegramPage";

const App = () => {
  const [continueFlag, setContinueFlag] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(false);

  const checkScreenSize = () => {
    if(window.screen.availWidth >= 1000) setIsDesktop(true);
    else setIsDesktop(false);
  };

  useLayoutEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", () => checkScreenSize());
  
    return () => {
      window.removeEventListener("resize", () => checkScreenSize());
    };
  }, []);
  

  return (
    <>
    {
      isDesktop === false 
      ? <TelegramPage />
      : (continueFlag === false
        ? <WelcomeBlock 
          setContinueFlag={(value) => setContinueFlag(value)}
        />
        : <Outlet />
      )
    } 
    </>
  );
};

export default App;
