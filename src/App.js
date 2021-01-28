import { useState, createContext } from "react";
//styles
import "./App.css";
//routes
import Routes from "./components/Routes";

export const UserContext = createContext();

function App() {
   const [countries, setCountries] = useState(null);
   const [token, setToken] = useState("");
   const [userAccount, setUserAccount] = useState("");
   const [lastWalletAddress, setlastWalletAddress] = useState("");
   const [lastWalletAddressSell, setlastWalletAddressSell] = useState("");

   return (
      <div className="App">
         <UserContext.Provider
            value={{
               countries,
               setCountries,
               token,
               setToken,
               userAccount,
               setUserAccount,
               lastWalletAddress,
               setlastWalletAddress,
               lastWalletAddressSell,
               setlastWalletAddressSell,
            }}
         >
            <Routes />
         </UserContext.Provider>
      </div>
   );
}

export default App;
