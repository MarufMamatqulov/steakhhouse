import React, { useState } from 'react'

import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import HeroCarousel from "../../components/HeroCarousel.jsx";

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
     <HeroCarousel/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
    </>
  )
}

export default Home
