import React from "react";
import PastLList from "../components/past-l-list";
import UpcomingLList from "../components/upcoming-l-list";
import { Switch, Link, Route } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Past Launches</Link>
        </li>
        <li>
          <Link to={"/future"}>Upcomeing Launches</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={PastLList} />
        <Route exact path="/future" component={UpcomingLList} />
      </Switch>
    </div>
  );
};
export default Content;
