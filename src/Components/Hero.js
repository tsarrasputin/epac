import React from 'react'
import { Card } from 'flowbite-react'
import Bounce from './Bounce'
import Particle from '../Particle/Particle'

function Hero() {
    return (

        <div >
            <div class="h-auto mt-4 mb-4 md:flex">

                <div class="flex h-auto md:w-full justify-center items-center ">
                    <div className="flex items-center justify-center p-12">
                        {/* <Bounce/> */}
                        <div className=" w-full ">
                            
                            <Card className='w-full bg-green-100'
                                href="#"
                            >
                                
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span> 
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p>
                                    Welcome to the digital home of Club EPAC (Environment Protection and Awareness Club) at Birla Institute of Technology, 
                                    Mesra! We are a passionate and dedicated group of individuals who share a common goal: to champion environmental 
                                    protection and raise awareness about the pressing ecological issues that affect our planet today. 
                                    Here, you'll discover our mission, our projects, and our commitment to creating a sustainable future 
                                    for generations to come. Join us as we embark on a journey to make a positive impact on our environment 
                                    and inspire change within our campus and beyond. Together, we can make a world of difference. 
                                    Explore, engage, and empower with Club EPAC!
                                    </p>
                                </p>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero