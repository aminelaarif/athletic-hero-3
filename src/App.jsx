import React from "react";
import { Shell } from "./components/layout";
import GlobalNav from "./components/GlobalNav";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Philosophy from "./components/sections/Philosophy";
import Community from "./components/sections/Community";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <Shell>
      <GlobalNav />
      <Hero />
      <Story />
      <Philosophy />
      <Community />
      <Contact />
      <Footer />
    </Shell>
  );
}

export default App;

