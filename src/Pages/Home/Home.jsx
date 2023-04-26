import React from 'react'

import Main from '../../Components/Main/Main'
import Category from '../../Components/Categories/Category'
import Featured from '../../Components/Featured/Featured'
import Categories from '../../Components/Sales/Categories'
import Pub from '../../Components/Pubs/Pub'

const Home = () => {
  return (
    <div>
      <Main />
      <Category />
      <Featured type="nouveauté" />
      <Pub />
      <Featured type="à la une" />
      <Categories />
      <Featured type="à la mode" />
    </div>
  )
}

export default Home