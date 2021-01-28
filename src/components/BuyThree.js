import { useState } from "react";
import { Link } from "react-router-dom";
//styles
import { Dropdown, SplitButton, Button } from "react-bootstrap";

const BuyThree = () => {
   const [selectedBank, setSelectedBank] = useState("Chose a local Bank");

   const handleBankChange = (e) => {
      setSelectedBank(e);
   };

   return (
      <div className="container my-5">
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

            <h4 className="mb-5 text-start">
               Transfers between banks are usually faster. If available give preference to your
               local bank and the system will automatically find the best P2P for you.
            </h4>

            <Link to="#" className="ml-5">
               <h4>How long does it usually take?</h4>
            </Link>

            <Link to="/buyfour">
               <Button variant="primary w-50" className="px-5 mt-5 text-center">
                  Next
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default BuyThree;
