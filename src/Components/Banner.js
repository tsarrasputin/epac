import React from 'react'
import { bannerbg } from '../Images'
import './Banner.css'
import Particle from '../Particle/Particle'
import Typewriter from "typewriter-effect";

new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });

function Banner() {
    return (
        <div className='banner'>
            <section class="w-full h-screen opacity-50 bac ">
                <Particle />
                <h1 className='text-box'><Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("E.P.A.C")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Environment Protection and Awareness Club")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("BIT Mesra")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcomes You!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("E.P.A.C")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Environment Protection and Awareness Club")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("BIT Mesra")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcomes You!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("E.P.A.C")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Environment Protection and Awareness Club")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("BIT Mesra")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcomes You!")
                            .start();
                    }}
                /></h1>
            </section>

        </div>
    )
}

export default Banner