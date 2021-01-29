import { useState, useContext } from "react";
import WAValidator from "wallet-address-validator";
import { useHistory } from "react-router-dom";
// styles
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
// context
import { UserContext } from "../App";

const BuyTwo = () => {
   const history = useHistory();
   const { lastWalletAddress, setlastWalletAddress } = useContext(UserContext);
   const [walletAddress, setWalletAddress] = useState("");

   /* check validity of wallet address ======================== */
   const validWallet = () => {
      const isValid = WAValidator.validate(walletAddress, "BTC");
      if (isValid) {
         alert("Wallet address is valid");
         history.push("/buythree");
         setlastWalletAddress(walletAddress);
      } else {
         alert("Wallet address is not valid, please try again");
      }
   };

   /* Animation ======================= */
   const props = useSpring({
      from: { opacity: 0, marginRight: -500 },
      to: { opacity: 1, margin: "0 auto" },
      config: { delay: 2500, duration: 2500 },
   });

   return (
      <animated.div className="container my-5" style={props}>
         <div className="p-5">
            <input
               onBlur={(e) => setWalletAddress(e.target.value)}
               className="form-control mb-5 w-50 mx-auto"
               type="text"
               placeholder="Enter your BSC wallet address"
            />

            <Typed
               style={{ fontSize: "2rem" }}
               strings={["You will receive your TAOA in this address"]}
               typeSpeed={80}
            />

            <h4 className="text-danger mt-5 text-start">
               Pay close attention mistakes will make you loose all your assets and there is nothing
               we can do to help
            </h4>
         </div>

         <a href="https://www.binance.org/en/smartChain" target="_blank" className="text-center">
            <h4>Don't have a BSC wallet yet?</h4>
         </a>

         <div className="text-center py-5">
            <Button variant="primary" className="px-5 w-50" onClick={validWallet}>
               Next
            </Button>
         </div>
      </animated.div>
   );
};

export default BuyTwo;
