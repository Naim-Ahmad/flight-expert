import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import SearchSection from './components/searchSection/SearchSection'
import SearchProvider from './context/state/searchSection/SearchProvider'


function App() {


  return (
    <>
      <Navbar />
      <SearchProvider>
        <SearchSection />
      </SearchProvider>
      <Footer />
    </>
  )
}

export default App
