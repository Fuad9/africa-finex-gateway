import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
//styles
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

   if (isLoading) return <LinearProgress />;
   if (error) return <div>Something went wrong ...</div>;

   const handleCountryChange = (e) => {
      setCountries(e);
   };

   return (
      <div className="container my-5" style={{ border: "2px solid blue", borderRadius: "1rem" }}>
         <div className="p-5">
            <h2 style={{ color: "blueviolet" }}>Stable coin gateway - BUY</h2>

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
                  <input className="form-control" type="number" placeholder="Quantity" />
               </label>
            </div>

            <div className="mt-5">
               <h3>Total Cost @Price AOA/TAOA</h3>
            </div>

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
