import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
// styles
import { Button } from "react-bootstrap";
//context
import { UserContext } from "../App";

const SellThree = () => {
   const history = useHistory();
   const { userAccount, setUserAccount } = useContext(UserContext);

   return (
      <div className="container my-5">
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
      </div>
   );
};

export default SellThree;
