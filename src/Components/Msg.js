'use client';
import { Card, Dropdown, Avatar } from 'flowbite-react';
import { facad } from '../Images';


function Msg() {
    return (

        <div>
            <div class="h-auto mt-4 mb-4 md:flex">
            <div class="flex h-auto md:w-3/4 justify-center items-center">
                    <div className="flex items-center justify-center ml-12 mr-12 min-h-80 ">

                        <div className=" w-full ">
                            <Card className='w-full bg-green-100 min-h-80'
                                href="#"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Message From Our Faculty Advisor</span>
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p>
                                    It is a matter of honor and immense pleasure that destiny has given me a chance to welcome 
                                    you to the institute. As the part of such a great heritage called Birla Institute of Technology, 
                                    Mesra, I take honour and I am privileged to work in this prodigious organization that has been 
                                    remarkable since centuries. BIT Mesra is intended to improve the education to best of its quality 
                                    through latest learning technologies with concurrent academia progress monitoring mechanism. 
                                    Co-currilcular programs are the inseparable part of learning curricula in today's progressive 
                                    generation. BIT Mesra sturdily chose to equip the nation’s largest working-age population with 
                                    knowledge and life skills. Hereby I welcome you all for joining this esteemed University and wishing 
                                    you all the best for your future endeavours.
                                    </p>
                                </p>
                            </Card>
                        </div>

                    </div>
                </div>
                <div
                    class="relative overflow-hidden md:flex md:w-1/2 m-4 justify-around items-center ">
                    <div class="absolute ml-96 mb-72 -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 rotate-90 "></div>
                    <div class=" rotate-90 ml-96 mb-96  absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <Card className='h-80 z-400 relative'>
                        <div className="flex justify-end  pt-4">

                        </div>
                        <div className="flex flex-col items-center pb-10 z-50">
                            <Avatar
                                size="xl"
                                bordered
                                img={facad}
                                alt="Dr.Neeta Kumari"
                                rounded
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white z-50">
                                Dr.Neeta Kumari
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Faculty Advisor <br />EPAC BIT Mesra
                            </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    href="https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=wc47mqsLu0gbHvWMZP4pSg%253d%253d"
                                >
                                    <p>
                                        Know More
                                    </p>
                                </a>
                                <a
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    href="mailto:neetak@bitmesra.ac.in"
                                >
                                    <p>
                                        Mail
                                    </p>
                                </a>
                            </div>
                        </div>
                    </Card>
                    
                </div>

            </div>
        </div>

        
    )
}

export default Msg