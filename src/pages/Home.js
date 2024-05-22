import React from 'react'
import Hero from '../components/hero'
import Sections from '../components/Sections'
import PopularMakes from '../components/PopularMakes'
import BoxCar from '../components/BoxCar'
import Customars from '../components/Customars'
import Blog from '../components/Blog'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Carbuy - Your Go-To Car Shopping Site</title>
        <meta
          name="description"
          content="Join BoxCar and receive pricing updates, shopping tips & more! Find the best car deals from top brands like Toyota, Porsche, Audi, and more."
        />
        <meta
          name="keywords"
          content="car shopping, car deals, Toyota, Porsche, Audi"
        />
        <link rel="canonical" href="https://www.exemple.com/" />
        <meta
          property="og:title"
          content="Exemple.com - Your Go-To Car Shopping Site"
        />
        <meta
          property="og:description"
          content="Join BoxCar and receive pricing updates, shopping tips & more! Find the best car deals from top brands like Toyota, Porsche, Audi, and more."
        />
        <meta property="og:url" content="https://www.exemple.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.exemple.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Exemple.com - Your Go-To Car Shopping Site"
        />
        <meta
          name="twitter:description"
          content="Join BoxCar and receive pricing updates, shopping tips & more! Find the best car deals from top brands like Toyota, Porsche, Audi, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.exemple.com/twitter-image.jpg"
        />
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

export default Home
