import React from "react";
import Header from "../../Components/Header/Header";
import data from "../../../Products/sneakerproducts.json";
import Footer from "../../Components/Footer/Footer";
import SneakerCategory from "../../Components/SneakerCategory.jsx/SneakerCategory";

function Home({ setShowLogin, cart, setCart }) {
  return (
    <div>
      <Header />
      <SneakerCategory
        data={data}
        setShowLogin={setShowLogin}
      />

      <Footer />
    </div>
  );
}

export default Home;
