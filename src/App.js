import { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Service />
      <Menu />
      <Testimonial />
      <Cta />
      <Footer />
    </Fragment>
  );
}

export default App;
