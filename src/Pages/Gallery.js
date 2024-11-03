import React from 'react'
import Footeri from '../Components/Footer'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logo } from '../Images'

function Gallery() {
    return (
        <div>
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
                    <Link to='/events'>
                        <Button>
                            Events
                        </Button>
                    </Link>
                    <Navbar.Toggle
                        className='mx-4' />
                </div>
                <Navbar.Collapse
                    className='m-4'>
                    <Link to='/'>
                        <Navbar.Link

                            href="#"
                        >
                            <p>
                                Home
                            </p>
                        </Navbar.Link>
                    </Link>
                    <Link to='/events '>
                        <Navbar.Link href="#">
                            Events
                        </Navbar.Link>
                    </Link>
                    <Link to='/team'>
                        <Navbar.Link href="#">
                            Our Team
                        </Navbar.Link>
                    </Link>
                    <Link to='/gallery'>
                        <Navbar.Link  className=' text-cyan-50 ' active href="#">
                            Gallery
                        </Navbar.Link>
                    </Link>
                    <Link to='/contact'>
                        <Navbar.Link href="#">
                            Contact Us
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://epacbitmesra.in/images/gallery_images/1..png" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://epacbitmesra.in/images/gallery_images/2..png" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="	https://epacbitmesra.in/images/gallery_images/3..png" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://epacbitmesra.in/images/gallery_images/4..png" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="	https://epacbitmesra.in/images/gallery_images/5..png" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://epacbitmesra.in/images/gallery_images/6..png" />
      </div>
    </div>
  </div>
</div>

            <Footeri />
        </div>
    )
}

export default Gallery