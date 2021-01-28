import { useContext, useState } from "react";
import WAValidator from "wallet-address-validator";
import { useHistory } from "react-router-dom";
// styles
import { Button } from "react-bootstrap";
// context
import { UserContext } from "../App";

const SellTwo = () => {
   const history = useHistory();
   const [walletAddress, setWalletAddress] = useState("");
   const { lastWalletAddressSell, setlastWalletAddressSell } = useContext(UserContext);

   // check validity of wallet address
   const validWallet = () => {
      const isValid = WAValidator.validate(walletAddress, "BTC");
      if (isValid) {
         alert("Wallet address is valid");
         history.push("/sellthree");
         setlastWalletAddressSell(walletAddress);
      } else {
         alert("Wallet address is invalid");
      }
   };

   return (
      <div className="container my-5">
         <div className="p-5">
            <input
               onBlur={(e) => setWalletAddress(e.target.value)}
               className="form-control mb-5 w-50 mx-auto"
               type="text"
               placeholder="BSC Wallet address"
            />

            <h4 className="mt-5 text-start">
               If for some reason we can not proceed with your sale (which is rare) we will
               completely return your assets. Please provide a BSC valid wallet address that you
               have access to. Pay close attention to not input any incorrect information.
            </h4>
         </div>

         <a href="https://www.binance.org/en/smartChain" target="_blank" className="text-center">
            <h4>Don't have a BSC wallet address?</h4>
         </a>

         <div className="text-center py-5">
            <Button variant="primary" className="px-5 w-50" onClick={validWallet}>
               Next
            </Button>
         </div>
      </div>
   );
};

export default SellTwo;
