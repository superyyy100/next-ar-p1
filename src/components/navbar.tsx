import ModeToggle from '@/components/mode-toggle'
import LoggedIn from '@/components/loggedIn'
import Link from 'next/link';


const Navbar = async () => {

  return (
    <nav className="relative max-w-max flex-1 gap-20 items-center justify-center hidden sm:flex">  
      <Link href="/" className=' text-2xl transition duration-300 hover:scale-110'>T-Profile</Link>
      <ul className="flex gap-4 text-lg space-x-4">
        <Link href="/about" className='hover:text-gray-500 transition-colors'>About</Link>
        <Link href="/contact" className='hover:text-gray-500 transition-colors'>Contact</Link>
        <Link href="/products" className='hover:text-gray-500 transition-colors'>Products</Link>
      </ul>
      <ModeToggle />
      <LoggedIn/>
    </nav>
  )
}

export default Navbar