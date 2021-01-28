import React from "react";
// styles
import { Button } from "react-bootstrap";

const SellFive = () => {
   return (
      <div className="container my-5">
         <div className="p-5">
            <h4 className="my-5 text-start">
               <span
                  style={{
                     color: "yellow",
                     fontSize: "1.8rem",
                     fontFamily: "roboto",
                     fontStyle: "italic",
                  }}
               >
                  Congratulations,
               </span>{" "}
               you have made it successfully. Remember your internal transaction ID. If you need any
               help customer support will ask for it
            </h4>

            <h1 style={{ color: "orange" }}>334235</h1>

            <h4 className="my-5">ID X, qtt token, Token, timestamp</h4>

            <Button variant="success w-50"> I've stored the ID and i'm done</Button>
         </div>
      </div>
   );
};

export default SellFive;
