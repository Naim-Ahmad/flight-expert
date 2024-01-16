import logo from '../../assets/fe-logo.712b9c71.svg'

export default function Navbar() {

  return (

    <nav className='flex justify-between items-center py-3'>
      <div className='w-48 sm:w-52'>
        <img src={logo} alt="flight expert logo" />
      </div>

      <div>
        <button className='btn btn-error text-white hover:bg-slate-100 hover:text-error'>Sign in</button>
      </div>
    </nav>
  )
}