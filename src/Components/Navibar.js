import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import { logo } from '../Images'
import { Link } from 'react-router-dom'

function Navibar() {
  return (
    <Navbar className=' bg-green-200'
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <img
          alt="EPAC React Logo"
          className="mr-3 h-5 sm:h-16"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mb-2">
          EPAC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Link to = '/events'>
        <Button>
          Events
        </Button>
        </Link>
        <Navbar.Toggle 
        className='mx-4'/>
      </div>
      <Navbar.Collapse
      className='m-4'>
        <Link  to='/'>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        </Link>
        <Link  to='/events'>
        <Navbar.Link href="#">
          Events
        </Navbar.Link>
        </Link>
        <Link  to='/team'>
        <Navbar.Link href="#">
          Our Team
        </Navbar.Link>
        </Link>
        <Link  to='/gallery'>
        <Navbar.Link href="#">
          Gallery
        </Navbar.Link>
        </Link>
        <Link  to='/contact'>
        <Navbar.Link href="#">
          Contact Us
        </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar