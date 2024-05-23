import React from "react";
import Hero from "../../components/hero";
import Sections from "../../components/Sections";
import PopularMakes from "../../components/PopularMakes";
import BoxCar from "../../components/BoxCar";
import Customars from "../../components/Customars";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Carbuy - Your Go-To Car Shopping Site</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://10-car-dealer-website-templates.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Carbuy - Your Go-To Car Shopping Site"
        />
        <meta
          property="og:description"
          content="Web site created using create-react-app"
        />
        <meta property="og:image" content="" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="10-car-dealer-website-templates.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://10-car-dealer-website-templates.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Carbuy - Your Go-To Car Shopping Site"
        />
        <meta
          name="twitter:description"
          content="Web site created using create-react-app"
        />
        <meta name="twitter:image" content="" />
      </Helmet>

      <Hero />
      <Sections />
      <PopularMakes />
      <BoxCar />
      <Customars />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
