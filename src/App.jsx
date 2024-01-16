import { CiFilter } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
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
      <Container className="overflow-x-hidden">
        <Navbar />
        <SearchSection />
        <main className='lg:flex gap-5 mt-20'>
          <div className='hidden lg:block lg:w-2/6'>
            <FilterSection />
          </div>

          <div className="lg:hidden">
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box p-0 w-11/12 max-w-5xl">
                <div className="modal-action mt-0">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-ghost"><IoMdClose  size={20}/></button>
                  </form>
                </div>
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
        <Footer />
      </Container>
    </>
  )
}

export default App
