import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationMenu from './extra';
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
	<NavigationMenu/>
				<Footer />
    </div>
	</BrowserRouter>
  );
}

export default App;
