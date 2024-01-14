import websiteLogo from '../../assets/fe-logo.712b9c71.svg';
import Container from "../shared/Container";

export default function Footer() {

  return (
    <Container>
      <footer className='flex'>
        <div>
          <figure className='w-52'>
            <img src={websiteLogo} alt="" />
          </figure>

          <div>
            <p className='text-red-500'>Flight Expert Dhaka (Main branch)

              90/1 Motijheel City Centre Level 25-

              B-1, Lift 26 Dhaka 1000, Bangladesh</p>
          </div>
        </div>

        
      </footer>
    </Container>
  )
}