import React from "react";
// styles
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const SellFive = () => {
   /* Animation ======================= */
   const props = useSpring({
      from: { opacity: 0, marginRight: -500 },
      to: { opacity: 1, marginRight: 0 },
      config: { delay: 2500, duration: 3500 },
   });

   return (
      <div className="container my-5">
         <div className="p-5">
            <animated.div style={props}>
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
                  you have made it successfully. Remember your internal transaction ID. If you need
                  any help customer support will ask for it
               </h4>
            </animated.div>

            <h1 style={{ color: "orange" }}>334235</h1>

            <Typed
               style={{ fontSize: "1.5rem" }}
               strings={["ID X, qtt token, Token, timestamp"]}
               typeSpeed={40}
            />
            <br />

            <Button variant="success w-50 mt-5"> I've stored the ID and i'm done</Button>
         </div>
      </div>
   );
};

export default SellFive;
