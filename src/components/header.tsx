import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
      <div className='flex h-14 w-full items-center justify-center gap-2 px-4'> 
        <Navbar />
      </div>
    </header>
  )
}

export default Header