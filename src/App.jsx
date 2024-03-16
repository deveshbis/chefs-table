
import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'

import Recipes from './component/Recipes/Recipes'

function App() {


  return (
    <>


      <div className='px-32 mt-10 bg-slate-500'>
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>



    </>
  )
}

export default App
