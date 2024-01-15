import SearchResult from './components/SearchResultSection/SearchResult'
import FilterSection from './components/filterSection/FilterSection'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import SearchSection from './components/searchSection/SearchSection'
import Container from './components/shared/Container'
import SearchProvider from './context/state/searchSection/SearchProvider'


function App() {


  return (
    <>
      <Navbar />
      <SearchProvider>
        <SearchSection />
      </SearchProvider>
      <Container className="mt-10">
        <main className='lg:flex gap-5'>
          <div className='w-2/5'>
            <FilterSection />
          </div>

          <div className='w-3/4'>
            <SearchResult />
          </div>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
