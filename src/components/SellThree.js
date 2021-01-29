import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
// styles
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
//context
import { UserContext } from "../App";

const SellThree = () => {
   const history = useHistory();
   const { userAccount, setUserAccount } = useContext(UserContext);

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
               type="text"
               className="form-control w-50 mx-auto"
               placeholder="Enter Your IBAN userAccount details to be credited"
               onBlur={(e) => setUserAccount(e.target.value)}
            />

            <div className="mt-5">
               <Link to="#">
                  <h4>Where can I find my IBAN</h4>
               </Link>
               <Button variant="primary w-50 mt-5" onClick={() => history.push("/sellfour")}>
                  Next
               </Button>
            </div>
         </div>
      </animated.div>
   );
};

export default SellThree;
