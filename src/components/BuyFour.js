import { useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useId } from "react-id-generator";
// styles
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
// context
import { UserContext } from "../App";

const BuyFour = () => {
   const history = useHistory();
   const [htmlId] = useId();
   const { lastWalletAddress } = useContext(UserContext);

   /* api from environment variable =================== */
   const BASE_URL = process.env.REACT_APP_BASE_URL;

   /* add data to db ===================*/
   const handleAddData = async () => {
      const mockData = { lastWalletAddress, SwapId: htmlId, IBAN: "ABCDEFG1234567" };

      await axios
         .post(`${BASE_URL}`, {
            mockData,
         })
         .then((res) => {
            if (res) {
               alert("Successfully posted");
               history.push("/sellone");
            }
         });
   };

   /* Animation ======================= */
   const props = useSpring({
      from: { opacity: 0, marginRight: -500 },
      to: { opacity: 1, margin: "0 auto" },
      config: { delay: 2500, duration: 3500 },
   });

   return (
      <animated.div className="container my-5" style={props}>
         <div className="p-5">
            <Typed
               style={{ fontSize: "2rem", color: "blueviolet", textAlign: "start" }}
               strings={["Transfers funds to the following account"]}
               typeSpeed={100}
            />

            <div className="my-5 text-start">
               <h3>
                  <span style={{ color: "yellow" }}>IBAN:</span> ABCDEFG1234567
               </h3>
               <h3>
                  <span style={{ color: "yellow" }}>Swap ID: </span>
                  {htmlId}
               </h3>
            </div>

            <h4 className="text-start">
               As soon as the funds are received the transaction to your BSC wallet will be made the
               following address.
            </h4>

            <h3 className="my-5" style={{ color: "orange" }}>
               {lastWalletAddress}
            </h3>

            <Link to="#">
               <h4>Doubts? Discord or Telegram</h4>
            </Link>

            <div className="text-center">
               <Button variant="primary w-50" className="px-5 mt-5 " onClick={handleAddData}>
                  Next
               </Button>
            </div>
         </div>
      </animated.div>
   );
};

export default BuyFour;
