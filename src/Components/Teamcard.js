import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { Avatar } from 'flowbite-react';


function Teamcard({name, por,imgurl, linkedin,insta}) {
  return (
    <div class="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 object-full rounded-full" 
                src={imgurl} alt="imgurl"/>
                {/* <Avatar img={imgurl} alt='imgurl' size={"lg"} rounded/> */}
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{name|| "name"}</a>
                </h3>
                <p>{por|| "por"}</p>
                <ul class="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href={insta} class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <FaInstagram className='h-8 w-8' />
                        </a>
                    </li>
                    <li>
                        <a href={linkedin} class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <RiLinkedinBoxLine className='h-8 w-8' />
                        </a>
                    </li>
                </ul>
            </div>
  )
}

export default Teamcard