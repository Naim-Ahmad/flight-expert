import { CiFilter } from "react-icons/ci"
import SearchHeader from './components/SearchResultSection/SearchHeader'
import SearchResult from './components/SearchResultSection/SearchResult'
import FilterSection from './components/filterSection/FilterSection'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import SearchSection from './components/searchSection/SearchSection'
import Container from './components/shared/Container'

function App() {
  
  return (
    <>
      <Navbar />
      <SearchSection />
      <Container className="mt-20">
        <main className='lg:flex gap-5'>
          <div className='hidden lg:block lg:w-2/6'>
            <FilterSection />
          </div>

          <div className="lg:hidden">
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <FilterSection />

              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            <div onClick={() => document.getElementById('my_modal_4').showModal()} className='card shadow-md bg-[#F3F6FA] card-compact rounded-md mb-6'>
              <div className="card-body flex-row justify-between">
                <span className='text-xl font-bold'>Filter your search result</span>
                <CiFilter size={30} />
              </div>
            </div>
          </div>

          <div className='lg:w-5/6'>
            <SearchHeader />
            <div className='flex flex-col gap-6'>
              <SearchResult />
              <SearchResult />
              <SearchResult />
              <SearchResult />
              <SearchResult />
            </div>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
