import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuyFour from "./BuyFour";
import BuyOne from "./BuyOne";
import BuyThree from "./BuyThree";
import BuyTwo from "./BuyTwo";
import SellFive from "./SellFive";
import SellFour from "./SellFour";
import SellOne from "./SellOne";
import SellThree from "./SellThree";
import SellTwo from "./SellTwo";

const Routes = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={BuyOne} />
            <Route path="/buyone" component={BuyOne} />
            <Route path="/buytwo" component={BuyTwo} />
            <Route path="/buythree" component={BuyThree} />
            <Route path="/buyfour" component={BuyFour} />
            <Route path="/sellone" component={SellOne} />
            <Route path="/selltwo" component={SellTwo} />
            <Route path="/sellthree" component={SellThree} />
            <Route path="/sellfour" component={SellFour} />
            <Route path="/sellfive" component={SellFive} />
         </Switch>
      </Router>
   );
};

export default Routes;
