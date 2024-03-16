
import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'
import Card from './component/Recipes/Card/Card'
import Recipe from './component/Recipes/Recipe/Recipe'
import Recipes from './component/Recipes/Recipes'

function App() {


  return (
    <>


      <div className='px-32 ml-8'>
        <Header></Header>
        <Banner></Banner>
        <div>
          <Recipes></Recipes>
          <div className='flex justify-between mt-5'>
            <Recipe></Recipe>
            <Card></Card>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
