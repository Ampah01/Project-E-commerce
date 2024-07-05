import React from "react";
import Header from "../../Components/Header/Header";
import SneakerList from "../../Components/SneakersLists/SneakerList";
import data from "../../../Products/sneakerproducts.json";
import Footer from "../../Components/Footer/Footer";
import sneakerCaty from "../../../Products/Categories.json";
import SneakerCategory from "../../Components/SneakerCategory.jsx/SneakerCategory";

function Home() {
  return (
    <div>
      <Header />
      <SneakerCategory sneakerCaty = {sneakerCaty}/>
      <SneakerList data={data} />
      <Footer />
    </div>
  );
}

export default Home;
