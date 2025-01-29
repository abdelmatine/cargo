import React from 'react'
import { Button } from './ui/button';
import {useUser, UserButton} from '@clerk/clerk-react'
import Logo from './ui/logo'

function Header() {

  const {user, isSignedIn} = useUser();


  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      <img
      src='/veg.svg'
      width={200}
      height={100}
      />
      <ul className='gap-16 hidden md:flex'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
      </ul>

      {isSignedIn?
      <div className='flex items-center gap-5'>
        <UserButton/>
        <Button>Submit Listing</Button>
      </div>
      :
      <Button>Submit Listing</Button>
      }

    </div>
  )
}

export default Header
