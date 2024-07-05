import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
/* import SneakersCard from "../../Components/All_Sneakers/SneakersCard";  */
import SneakerCategory from "../../Components/Sneakers_cartegory/SneakerCategory";
import data from "../../../Products/sneakerproducts.json";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <SneakerCategory data={data} />
      <Footer />
    </div>
  );
}

export default Home;
