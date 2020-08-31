import React from 'react';
import AboutPage from "./AboutPage/AboutPage";
import './App.css';
import NavbarPantry from "./NavbarPantry/NavbarPantry";
import SearchPantry from "./SearchPage/SearchPantry/SearchPantry";
import Container from "react-bootstrap/cjs/Container";
import Logo from "./Logo/Logo";
import TestCardWrapper from "./TestCardWrapper/TestCardWrapper";
import Subtext from "./Subtext/Subtext";
import SearchContainer from "./SearchPage/SearchContainer/SearchContainer";
import RecipeCard from "./SearchPage/RecipeCard/RecipeCard";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
      <Router>
          <div className="App">
              <NavbarPantry/>
              <div className={'logo-subtext-container'}>
                  <Logo className='mb-4'/>
                  <Subtext query={'A search engine for food.'}/>
              </div>

          <Switch>
              <Route exact path={'/home'} component={SearchPage}/>
              <Route exact path={'/about'} component={AboutPage}/>
          </Switch>
          </div>

        </Router>
  );
}

export default App;
