import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={Project} path="/project" exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
