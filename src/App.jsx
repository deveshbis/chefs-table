
import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'

import Recipes from './component/Recipes/Recipes'

function App() {


  return (
    <>


      <div className='lg:px-32'>
        <div className='lg:mb-5 bg-green-500 rounded-lg'>
          <Header></Header>
        </div>
        <div className='lg:mt-5'>
          <Banner></Banner>
          <Recipes></Recipes>
        </div>

      </div>



    </>
  )
}

export default App
