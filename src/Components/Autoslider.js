import React from 'react'
import './Auto.css'
import { vanmahotsav, natframes, pantheongreenavengers, beyondcrisis, earthmatters, jumanji } from '../Images'
import Glowingbut from './Glowingbut.tsx'
import {Link, useNavigate} from 'react-router-dom'


function Autoslider() {

    const navigate = useNavigate();
    const navigateSignup = () =>{
        navigate('/signin')
      }

    return (
        <div>
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />

            <div class="container mx-auto px-4 sm:px-12 py-8 items-center ">
                <center>
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white items-center relative">
                    <p className="items-center justify-center relative">
                        <span class="text-transparent bg-clip-text items-center justify-center bg-gradient-to-r from-green-500 to-green-300">Our Events</span>
                    </p>
                </h5>
                </center>
                <div class="slider">
                    <div class="slide-track2">
                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={natframes} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={vanmahotsav} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} alt='event poster'/>
                        </div>

                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={beyondcrisis} alt='event poster' />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} alt='event poster' />
                        </div>


                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={beyondcrisis} alt='event poster'/>
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} alt='event poster'/>
                        </div>


                    </div>
                </div>
            <center>
                <Link  to='/events'>
                <Glowingbut  children = "I want more!"/>
                </Link >
            
            </center>

            </div>
        </div>
    )
}

export default Autoslider