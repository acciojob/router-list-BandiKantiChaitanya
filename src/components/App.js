
import React from "react";
import './../styles/App.css';
import { Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route  exact path='/' component={ItemList} />
          <Route path='/items/:id' component={ItemDetails}  />
        </Switch>
    </div>
  )
}

export default App
