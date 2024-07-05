import React from "react";
import Header from "../../Components/Header/Header";
import SneakerList from "../../Components/SneakersLists/SneakerList";
import data from "../../../Products/sneakerproducts.json";
import Footer from "../../Components/Footer/Footer";
import SneakerCategory from "../../Components/SneakerCategory.jsx/SneakerCategory";

function Home() {
  return (
    <div>
      <Header />
      <SneakerCategory data = {data} />
      <SneakerList data = {data} />
      <Footer />
    </div>
  );
}

export default Home;
