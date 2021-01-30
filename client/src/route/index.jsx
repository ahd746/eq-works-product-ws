import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import DailyCharts from "../pages/DailyCharts";
import HourlyCharts from "../pages/HourlyCharts";
import Locations from "../pages/Locations";
import GeoLocation from "../pages/GeoLocation";
const Error = () => <Redirect to="/" />;

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/daily" component={DailyCharts} />
      <Route path="/hourly" component={HourlyCharts} />
      <Route path="/locations" component={Locations} />
      <Route path="/map" component={GeoLocation} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Router;
