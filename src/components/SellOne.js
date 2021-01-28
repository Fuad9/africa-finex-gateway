import { useContext } from "react";
import { Link } from "react-router-dom";
// styles
import { Dropdown, SplitButton, Button } from "react-bootstrap";
// context
import { UserContext } from "../App";

const SellOne = () => {
   const { token, setToken } = useContext(UserContext);

   const handleTokenChange = (e) => {
      setToken(e);
   };

   return (
      <div className="container my-5 p-5">
         <div>
            <h2 className="mb-5" style={{ color: "blueviolet" }}>
               Stablecoin gateway - Sell
            </h2>

            <SplitButton
               key={"down"}
               id={`dropdown-button-drop-${"down"}`}
               drop={"down"}
               variant="primary"
               title={token || "Choose a token"}
            >
               <Dropdown.Item onSelect={handleTokenChange} eventKey={"token1"}>
                  token1
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleTokenChange} eventKey={"token2"}>
                  token2
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleTokenChange} eventKey={"token3"}>
                  token3
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleTokenChange} eventKey={"token4"}>
                  token4
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleTokenChange} eventKey={"token5"}>
                  token5
               </Dropdown.Item>
            </SplitButton>

            <div className="mt-3">
               <label htmlFor="quantity">
                  <input className="form-control" type="number" placeholder="Quantity" />
               </label>
            </div>

            <div className="mt-5">
               <h4>You will get X AOA @Preco AOA/TAOA</h4>
            </div>

            <Link to="/selltwo">
               <Button variant="primary w-50" className="px-5 mt-5 text-center">
                  Next
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default SellOne;
