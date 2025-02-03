import React from 'react'
import { Button } from './ui/button';
import {useUser, UserButton, SignInButton} from '@clerk/clerk-react'
import Logo from './ui/logo'
import { Link } from 'react-router-dom';

function Header() {

  const {user, isSignedIn} = useUser();


  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      <div className='flex justify-between items-center'>
      <img
      src='/veh.png'
      width={100}
      height={80}
      />&nbsp;
      <h1 className="font-aclonica text-2xl font-bold hidden md:block">
          VEHICOOL
      </h1>
      </div>

      <ul className='gap-16 hidden md:flex'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
      </ul>

      {isSignedIn?
      <div className='flex items-center gap-5'>
        <UserButton/>
        <Link to={'/profile'}>
          <Button>Submit Listing</Button>
        </Link>
      </div>
      :
      <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Submit Listing</Button>
      </SignInButton>
      }

    </div>
  )
}

export default Header
