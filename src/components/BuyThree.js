import { useState } from "react";
import { Link } from "react-router-dom";
//styles
import { Dropdown, SplitButton, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const BuyThree = () => {
   const [selectedBank, setSelectedBank] = useState("Choose a local Bank");

   /* toggle bank change ====================*/
   const handleBankChange = (e) => {
      setSelectedBank(e);
   };

   /* Animation ======================= */
   const props1 = useSpring({
      from: { opacity: 0, marginRight: -500 },
      to: { opacity: 1, margin: "0 auto" },
      config: { delay: 2500, duration: 3500 },
   });

   const props2 = useSpring({
      from: { opacity: 0, marginLeft: -500 },
      to: { opacity: 1, marginLeft: 0 },
      config: { delay: 2500, duration: 3500 },
   });

   const props3 = useSpring({
      from: { opacity: 0, marginBottom: -500 },
      to: { opacity: 1, marginBottom: 0 },
      config: { delay: 2500, duration: 3500 },
   });

   return (
      <animated.div className="container my-5" style={props1}>
         <div className="p-5">
            <div className="my-5">
               <SplitButton
                  key={"down"}
                  id={`dropdown-button-drop-${"down"}`}
                  drop={"down"}
                  variant="primary"
                  title={selectedBank}
               >
                  <Dropdown.Item onSelect={handleBankChange} eventKey={"Bank1"}>
                     Bank1
                  </Dropdown.Item>
                  <Dropdown.Item onSelect={handleBankChange} eventKey={"Bank2"}>
                     Bank2
                  </Dropdown.Item>
                  <Dropdown.Item onSelect={handleBankChange} eventKey={"Bank3"}>
                     Bank3
                  </Dropdown.Item>
                  <Dropdown.Item onSelect={handleBankChange} eventKey={"Bank4"}>
                     Bank4
                  </Dropdown.Item>
                  <Dropdown.Item onSelect={handleBankChange} eventKey={"Bank5"}>
                     Bank5
                  </Dropdown.Item>
               </SplitButton>
            </div>

            <animated.div style={props2}>
               <h4 className="mb-5 text-start">
                  Transfers between banks are usually faster. If available give preference to your
                  local bank and the system will automatically find the best P2P for you.
               </h4>
            </animated.div>

            <animated.div style={props3}>
               <Link to="#" className="ml-5">
                  <h4>How long does it usually take?</h4>
               </Link>
            </animated.div>

            <Link to="/buyfour">
               <Button variant="primary w-50" className="px-5 mt-5 text-center">
                  Next
               </Button>
            </Link>
         </div>
      </animated.div>
   );
};

export default BuyThree;
