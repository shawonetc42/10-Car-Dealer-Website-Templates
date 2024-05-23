import React from 'react'
import HomeFeatures from '../../components/Home2/HomeFeatures'
import HomeHero from '../../components/Home2/HomeHero'
import SearchedCar from '../../components/Home2/SearchedCar'
import Choose from '../../components/Home2/Choose'
import LatestCar from '../../components/Home2/LatestCar'
import Inspiration from '../../components/Home2/Inspiration'
import Team from '../../components/Home2/Team'
import Blog from '../../components/Blog'
import PremiumBrands from '../../components/Home2/PremiumBrands'
import JoinBox from '../../components/Home2/JoinBox'
import FooterHome2 from '../../components/Footer/FooterHome2'

function Home2() {
  return (
    <div>
      <HomeFeatures/>
      <HomeHero/>
      <SearchedCar/>
      <Choose/>
      <LatestCar/>
      <Inspiration/>
      <Team/>
      <Blog/>
      <PremiumBrands/>
      <JoinBox/>
      <FooterHome2/>
    </div>
  )
}

export default Home2
