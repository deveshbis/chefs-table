
import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'

import Recipes from './component/Recipes/Recipes'

function App() {


  return (
    <>


      <div className='px-32 ml-8 bg-slate-500'>
        <Header></Header>
        <Banner></Banner>
        <div>
          <Recipes></Recipes>
          {/* <div className='flex justify-between mt-5'>
            <Recipe></Recipe>
            <Cart></Cart>
          </div> */}
        </div>
      </div>



    </>
  )
}

export default App
