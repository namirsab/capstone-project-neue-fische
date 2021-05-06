import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";
import BookmarkPage from "./components/BookmarkPage";
import ResultsPage from "./components/ResultsPage";
import TakeAwayPage from "./components/TakeAwayPage";
import OpenPage from "./components/OpenPage";
import AmbiencePage from "./components/AmbiencePage";
import CuisinePage from "./components/CuisinePage";
import ViewPage from "./components/ViewPage";
import OutdoorPage from "./components/OutdoorPage";
import PartOfTownPage from "./components/PartOfTownPage";
import RestaurantDetailedPage from "./components/RestaurantDetailedPage";
import { parse } from "./utilities/queryString";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();

  const filters = parse(location.search);
  /*
    This is an example of how to deal with the filtering.
    In your code, you should have all the filtering stuff in a
    separate module, then import it here and use it 
  */

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (filters.takeAway?.includes("delivery")) {
      return restaurant.delivery === true;
    }
    return true;
  });

  useEffect(() => {
    const fetchRestaurants = () => {
      return fetch("/restaurants.json")
        .then((response) => response.json())
        .then((restaurantData) => {
          const newData = restaurantData.results;
          setRestaurants(newData);
        });
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
        <Route exact path="/bookmarkPage">
          <BookmarkPage />
        </Route>
        <Route exact path="/takeAwayPage">
          <TakeAwayPage restaurantData={filteredRestaurants} />
        </Route>
        <Route exact path="/openPage">
          <OpenPage />
        </Route>
        <Route exact path="/ambiencePage">
          <AmbiencePage />
        </Route>
        <Route exact path="/cuisinePage">
          <CuisinePage />
        </Route>
        <Route exact path="/viewPage">
          <ViewPage />
        </Route>
        <Route exact path="/outdoorPage">
          <OutdoorPage />
        </Route>
        <Route exact path="/partOfTownPage">
          <PartOfTownPage />
        </Route>
        <Route exact path="/resultsPage">
          <ResultsPage restaurantData={restaurants} />
        </Route>
        <Route exact path="/restaurantDetailedPage/:id">
          <RestaurantDetailedPage restaurantData={restaurants} />
        </Route>
        <Route exact path="/loadingPage"></Route>
      </Switch>
    </div>
  );
}

export default App;
