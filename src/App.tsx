import { useState } from "react";
import { Outlet } from "react-router-dom";
import WelcomeBlock from "./components/WelcomeBlock/WelcomeBlock";

const App = () => {
  const [continueFlag, setContinueFlag] = useState(false); 
  
  return (
    <>
    {
      continueFlag === false
        ? <WelcomeBlock 
          setContinueFlag={(value) => setContinueFlag(value)}
        />
        : <Outlet /> 
    } 
    </>
  );
};

export default App;
