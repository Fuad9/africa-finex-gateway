import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
//styles
import { useSpring, animated } from "react-spring";
import { LinearProgress } from "@material-ui/core";
import { Dropdown, SplitButton, Button } from "react-bootstrap";
//context
import { UserContext } from "../App";

/*fetch countries data ====================== */
const getCountriesData = async () =>
   await (await fetch("https://restcountries.eu/rest/v2/all")).json();

const BuyOne = () => {
   const { countries, setCountries } = useContext(UserContext);
   const { data, isLoading, error } = useQuery("all", getCountriesData);

   /* Animation ======================= */
   const props1 = useSpring({
      from: { opacity: 0, marginTop: -500 },
      to: { opacity: 1, marginTop: 0 },
      config: { delay: 2500, duration: 3500 },
   });

   const props2 = useSpring({
      from: { opacity: 0, marginLeft: -500 },
      to: { opacity: 1, marginLeft: 0 },
      config: { delay: 2500, duration: 3500 },
   });

   if (isLoading) return <LinearProgress />;
   if (error) return <div>Something went wrong ...</div>;

   const handleCountryChange = (e) => {
      setCountries(e);
   };

   return (
      <div className="container my-5">
         <div className="p-5">
            <animated.div style={props1}>
               <h2 style={{ color: "blueviolet" }}>Stable coin gateway - BUY</h2>
            </animated.div>

            <div className="my-5">
               <SplitButton
                  key={"down"}
                  id={`dropdown-button-drop-${"down"}`}
                  drop={"down"}
                  variant="primary"
                  title={countries || "Select Your Coin"}
               >
                  {data?.map((country) => (
                     <Dropdown.Item onSelect={handleCountryChange} eventKey={country.name}>
                        {country.name} - ( {country.currencies[0].code})
                     </Dropdown.Item>
                  ))}
               </SplitButton>
            </div>

            <div>
               <label htmlFor="quantity">
                  <input
                     className="form-control"
                     name="quantity"
                     type="number"
                     placeholder="Quantity"
                  />
               </label>
            </div>

            <animated.div className="mt-5" style={props2}>
               <h3>Total Cost @Price AOA/TAOA</h3>
            </animated.div>

            <Link to="/buytwo">
               <Button variant="primary" className="px-5 mt-5 text-center w-50">
                  Next
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default BuyOne;
