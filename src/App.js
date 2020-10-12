import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import Seeker from './Seeker';
import Speaker from './Speaker';
import Events from './Events';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
	<BrowserRouter>
    <div className="App">
	<Navbar/>
	<div>
        				<Switch>
          					<Route exact path="/"><Header /></Route>
          					<Route path="/services"><Services /></Route>
							<Route path="/seeker"><Seeker /></Route>
							<Route path="/speaker"><Speaker /></Route>
							<Route path="/events"><Events /></Route>
							<Route path="/team"><Team /></Route>
							<Route path="/contact"><Contact /></Route>
        				</Switch>
      				</div>
				<Footer />
    </div>
	</BrowserRouter>
  );
}

export default App;
