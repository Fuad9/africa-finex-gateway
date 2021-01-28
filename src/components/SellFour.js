import { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//styles
import { Button } from "react-bootstrap";
//context
import { UserContext } from "../App";

const SellFour = () => {
   let history = useHistory();
   const { userAccount, lastWalletAddressSell, token } = useContext(UserContext);
   const [txid, setTxid] = useState("");

   /* api from environment variable ========================*/
   const BASE_URL = process.env.REACT_APP_BASE_URL;

   /* add data to db =========================*/
   const postSell = async () => {
      const mockData = { userAccount, lastWalletAddressSell, token, txid };

      await axios
         .post(`${BASE_URL}`, {
            mockData,
         })
         .then((res) => {
            if (res) {
               alert("Data added successfully");
               history.push("/sellfive");
            }
         });
   };

   return (
      <div className="container my-5">
         <div className="p-5">
            <h4 className="my-5 text-start">
               Transfer your tokens {token} to the following BSN (Biance smart chain) address and
               enter the result in a TXid
            </h4>

            <h4 style={{ color: "orange" }}>0xd215423aAd24dA82f782eA845aeD269E621</h4>

            <input
               type="text"
               className="form-control my-5 w-50 mx-auto"
               placeholder="TXid (mandatory info)"
               onBlur={(e) => setTxid(e.target.value)}
            />

            <Button variant="primary w-50" onClick={postSell}>
               Done
            </Button>
         </div>
      </div>
   );
};

export default SellFour;
