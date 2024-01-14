import paymentMethod from '../../assets/bank-logo.webp';
import websiteLogo from '../../assets/fe-logo.712b9c71.svg';
import basis from '../../assets/footer/basis.png';
import dunc from '../../assets/footer/duns.png';
import google from '../../assets/footer/google-logo.svg';
import ita from '../../assets/footer/iata.png';
import Container from "../shared/Container";

export default function Footer() {

  return (
    <Container>
      <section className="footer grid-flow-row lg:grid-flow-col-dense py-10 mt-10">
        <aside>
          <img src={websiteLogo} alt="" />
          <p className='my-3 text-red-400'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title capitalize">About</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title capitalize">Help</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title capitalize">Have Questions?</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <div className='max-w-96'>
          <header className="footer-title capitalize">Accepted Payments
          </header>
          <img src={paymentMethod} className='w-full' alt="" />
        </div>
      </section>
      <div className="divider"></div>

      <section className='grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <header className="footer-title capitalize">Accredited Member
          </header>
          <img className='w-32 mx-auto' src={basis} alt="" />
        </div>
        <div >
          <header className="footer-title capitalize">Accredited Member
          </header>
          <img className='w-20 mx-auto' src={dunc} alt="" />
        </div>
        <div >
          <header className="footer-title capitalize">Accredited Member
          </header>
          <img className='w-32 mx-auto' src={ita} alt="" />
        </div>
        <div >
          <header className="footer-title capitalize">Accredited Member
          </header>
          <img className='w-32 mx-auto' src={google} alt="" />
        </div>
      </section>

      <div className="divider"></div>
      <section className="footer footer-center">
        <aside className="pt-8 pb-16 font-semibold text-gray-400 text-base">
          <p >Copyright @2024 FEBD Ltd. All rights reserved by Flight Expert</p>
        </aside>
      </section>
    </Container>
  )
}