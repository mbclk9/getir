import Categories from "components/getir/Categories";
import Header from "components/getir/Header";
import HeroSection from "components/getir/HeroSection";
import Campains from "components/getir/Campains"
import Card from "components/getir/Card";
import Footer from "components/getir/Footer";
import {Routes, Route, Link, NavLink} from "react-router-dom"


function App() {
  return (
    <>
     
     <Header/>
     <HeroSection/>
     <Categories/>
     <Campains/>
     <Card/>
     <Footer/>
    </>
  );
}

export default App;
