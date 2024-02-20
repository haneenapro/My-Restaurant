import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Services,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <Gallery />
    {/* <FindUs /> */}
    <Footer />
    {/* <Services /> */}
  </div>
);

export default App;

// do todays special and what we believe in section's css yourself
//4: 27
