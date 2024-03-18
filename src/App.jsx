
import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'
import Recipes from './component/Recipes/Recipes'



function App() {


  return (
    <>


      <div className='lg:px-32'>
        <div className='lg:mb-5 rounded-lg'>
          <Header></Header>
        </div>

        <Banner></Banner>

        <Recipes></Recipes>

      </div>



    </>
  )
}

export default App
