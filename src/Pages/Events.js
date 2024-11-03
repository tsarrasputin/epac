import React, { useState } from 'react'
import Navibar from '../Components/Navibar'
import Footeri from '../Components/Footer'
import { Carousel, Card } from 'flowbite-react'
import { natframes, eve_natframes1, eve_natframes2 } from '../Images'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logo } from '../Images'


function Events() {
  const [showMore, setShowMore] = useState(false);
  const jumanji_text = "There's a somewhat soft scent lying upon these woods of pattering rain, of soothing herbs, ofhidden gold and untoward intentions. There's gold to be found and glory to be had, so step up and Sherlock your way through a checkpoint-dictated meander and claim victory before the nefariouslyevil competition gets its grubby mitts on the loot!"
  const vmw_text = "On the occasion of Van Mahotsav, the Environment Protection and Awareness Club organized a Virtual Van Mahotsav where we distributed saplings at selected cities. The cities opted were Ranchi, Agartala, Mamroda, Lucknow and Jamshedpur. We distributed 25 saplings in Ranchi, 15 saplings in Agartala, 501 saplings in Mamroda, 25 saplings in Lucknow and 89 saplings in Jamshedpur. Also, we provided 8 fruit bearing plans to BIT, Mesra. We were supported by some awesome nurseries like Saini Nursery, Didwana, Rajasthan, Bagiya, The Garden Shop in Jamshedpur, Tirupati Hi-tech Nursery in Lucknow, House of Plants in Agartala, and Shankar Nursery in Ranchi and sincere gratitude to Gram Vikas Sewa Samiti, Mamroda for the voluntary contribution in the distribution of 501 plants in this noble cause"
  const nat_text = "The Nat Frames was conducted from 19/03/2022 to 20/03/2022 in association with Photographic Society, in online mode. Participants were required to upload their details along with their clicked picture in a google form. The Picture was required to be a original work of the participant and any type of forgery led to disqualification. The top-3 pictures were selected and felicitated."
  const jsef_text = "JSEF is our Flagship event held every year in January and February.This year too we are ready with all our gears fo another round of fun and science and a lot of Environment Awareness and Protection. Tentative Date: 13, 14 January 2024. With this event,we aim to encourage the young generation to protect and preserve the environment.JSEF is a multi-day fest filled with   enthralling events such as debates,lucky brainiacs,penolution and AdSense.JSEF is alsoone of the largest Science-Environmental fests in the East zone with the participation of more than 25+ schools and 500 students. JSEF has been restricted to the East zone for the past few years but in the year 2018 we had decided to spread our wings to the entire country."
  const dmtp_text = "This beautiful nature turns into most horrible nightmares at times.DMTP ensures that we are prepared for such times of need.Living in an earthquake prone area demands preparation for the worst cases."
  return (
    <div className='min-h-screen'>
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
            <Navbar.Link className='text-white' active href="#">
              Events
            </Navbar.Link>
          </Link>
          <Link to='/team'>
            <Navbar.Link href="#">
              Our Team
            </Navbar.Link>
          </Link>
          <Link to='/gallery'>
            <Navbar.Link href="#">
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

      {/* Upcoming Event */}
      <div>
        <center>
          <h5 className="text-4xl font-bold tracking-tight mt-8 mb-8 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Upcoming Events</span>
            </p>


            {/* Jsef */}
            <div>
              <center>
                  <p >
                    <span class="text-transparent bg-clip-text text-md  bg-gradient-to-r from-green-500 to-green-300">Jharkhand Science and Environment Festival</span>
                  </p>
              </center>
              <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1rSFyo2B-Te-U7udR4ulHSTB132aO8_V-"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1PSnmdIoVElEFYQtXrNCdDg49fJJ-YWWS"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1lOj8e1vtg3JJp6d-XdddTOvtw_w_8Yt7"
                />
              </Carousel>
              <center>

                <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
                  <p >
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Media and Coverage</span>
                  </p>
                </h5>
              </center>

              <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1sn1zNO0HBCFABjXWmqEdfys6kua7S4ko"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1sjzik2cQJCh2YOE4vu_hmtjqI6imxJQp"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1ZQz1CUS56ibkX01eKqgTIyA2A1wCbgKa"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1hYUfCrE78x6Uj_LZa98PUszQbH05V5vx"
                />
                <img className='object-contain h-full '
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1puiBAzV6kqPClOrc9-0ixrZpJyXgNVGM"
                />
              </Carousel>

              {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}
              <center>
                <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px]   mb-8'
                  src="https://drive.google.com/uc?id=1hVQd2hCIW4jkkBHBF7PyfBGb8kQzqqCj" controls>
                </video>
                <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px]   mb-8'
                  src="https://drive.google.com/uc?id=1yH7XDO2QR97KlL_h82_6KEQre-bIVd6Q" controls>
                </video>
              </center>



              <Card className='w-auto mx-6 mb-4 bg-green-100'
                href="#"
              >
                <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                  <p>
                    {showMore ? jsef_text : `${jsef_text.substring(0, 250)}`}
                    <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
                  </p>
                </p>
              </Card>
            </div>


          </h5>
          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-2  text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">EPAC Essay Competition: Soil and Water - A Source of Life</span>
            </p>
          </h5>
          <img className='object-contain h-96 w-auto ml-5 mr-5 mb-4 '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1p23uX8sBjO5dwWXmsc_I37Vnpr4RXeBM"
          />
        </center>
        {/* Essay Pollution Day */}
        <div>

          <Card className='w-auto mx-6 mb-4 bg-green-100'
            href="#"
          >
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>

                Embark on a literary journey with EPAC's Essay Competition! Explore the profound relationship between soil and water, the essence of life itself.
              </p>
              <p className='mt-2 mb-2' >

                Event Details:

                Date: 1st December
                Topic: Soil and Water: A Source of Life
                Format: Online
                Submission: PDF Essays (1000-1500 words)
                Registration link 🔗:<br />
                <p className=' text-sky-700 underline  ' >
                  https://forms.gle/GqzNf2PFgKcic5t26
                </p>
                <br />
                Unleash your thoughts, dive into the depth of your insights, and craft an essay that echoes the harmony between soil and water. Let your words be the voice of change!

                Compose your essay and submit in PDF format to given google form.

                Stay tuned for results and exciting prizes!
                Join EPAC in celebrating the beauty of expression and the vitality of soil and water. Let your words flow like a river and take root like the strongest tree!

                #EPACEssayCompetition #SoilAndWater #SourceOfLife #EssayContest #EPACEvents #OnlineEvent #Environment #ExpressYourThoughts

              </p>

            </p>
          </Card>
        </div>


        <center>
          <Link to='https://forms.gle/GqzNf2PFgKcic5t26'>
            <button className='buttonglowing mx-4 my-4'>
              Register Now!
            </button>
          </Link >
        </center>
      </div>



      {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}


      <div>
        <center>
          <h5 className="text-4xl font-bold tracking-tight mt-8 mb-8 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Past Events</span>
            </p>
          </h5>
          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-2  text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Jungle Joust</span>
            </p>
          </h5>
        </center>


        <>
          {/* <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1rSFyo2B-Te-U7udR4ulHSTB132aO8_V-"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PSnmdIoVElEFYQtXrNCdDg49fJJ-YWWS"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1lOj8e1vtg3JJp6d-XdddTOvtw_w_8Yt7"
          />
        </Carousel> */}
          {/* <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Media and Coverage</span>
            </p>
          </h5>
        </center>

        <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1sn1zNO0HBCFABjXWmqEdfys6kua7S4ko"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1sjzik2cQJCh2YOE4vu_hmtjqI6imxJQp"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1ZQz1CUS56ibkX01eKqgTIyA2A1wCbgKa"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1hYUfCrE78x6Uj_LZa98PUszQbH05V5vx"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1puiBAzV6kqPClOrc9-0ixrZpJyXgNVGM"
          />
        </Carousel> */}

          {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}</>
        <center>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px]   mb-8'
            src="https://drive.google.com/uc?id=1kAfFvaysiPnKPpz900HjjyJ_85h-jQzK" controls>
          </video>
        </center>



        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              "In a unique fusion of gaming and environmental consciousness, the event "Jungle Joust: BGMI Reforest Rampage" brings together the thrill of competitive gaming and the urgent need for ecological preservation. Organized by a collaboration of gaming enthusiasts and environmentalists, this event is a two-round online gaming tournament featuring the popular mobile game "Battlegrounds Mobile India" (BGMI). What sets this event apart is its innovative approach to tree planting – for every kill achieved by the top three finalists in each round, a tree will be planted in a designated reforestation area.
            </p>
            <p className='mt-2 mb-2' >
              <center>
                <h5 className="text-1xl font-bold tracking-tight mt-4  text-gray-900 dark:text-white ">
                  <p >
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Round 1: Verdant Vanguard Elimination</span>
                  </p>
                </h5>
              </center>
              The first round, aptly named "Verdant Vanguard Elimination," takes place over a weekend. Players from all over the BIT Mesra register for the tournament, showcasing their skills in BGMI. Participants engage in a series of thrilling Squad Matches, aiming to accumulate as many kills as possible. The round is characterized by intense gameplay and fierce competition as players battle to secure a spot in the top three.

              As the first round concludes, the organizers tally up the kills achieved by each of the participants.
              The top two squads players with the highest kill counts advance to the final round.

            </p>
            <p className='mt-2 mb-'>
              <center>
                <h5 className="text-1xl font-bold tracking-tight mt-4  text-gray-900 dark:text-white ">
                  <p >
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Round 2: Arboreal Showdown Championship</span>
                  </p>
                </h5>
              </center>

              The second round, the "Arboreal Showdown Championship," is the culmination of the event. The top two squads from the first round now face off in a series of custom solo matches. These matches will be live-streamed to a global audience, showcasing the exceptional skills of the finalists and adding an element of excitement and suspense to the event.

              With each kill accomplished by the finalists in the championship round, the organizers plant a corresponding number of trees in the chosen reforestation area. This creative approach links virtual achievements to real-world impact, reinforcing the idea that actions in the gaming world can translate into positive change for the environment."

            </p>
            <p className='mt-2 mb-'>
              <center>
                <h5 className="text-1xl font-bold tracking-tight mt-4  text-gray-900 dark:text-white ">
                  <p >
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Prize Pool: 8K</span>
                  </p>
                </h5>
              </center>
              <center>
                1st : 5K<br />
                2nd : 2K<br />
                3rd : 1K<br />
              </center>
            </p>
          </p>
        </Card>

      </div>




      {/* Jumanji */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Jumanji</span>
            </p>
          </h5>

        </center>
        {/* https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}
        <Carousel className='h-96 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Xq64C6KHUil5nJ-GPc7bcjOpDV6p-OI5"
          />

          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=18RYP2zeolptehiuCgMmb_cdDZPQll4X2"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1p3KJGeiLW6GQnvwnTtSU_o9LdC5DqORV"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1m4hi_K6BLF1e2ThLcKSAFP_duDIHCITk"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PnI13YThq5PS1kladynxYHPDD4gUbieJ"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1PiPXJ2Jq8u5RCDMUqtZoMCCR6L8oMYCL"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Eeq1d_3mHVxURLdAGsUimcALtvXm24ah"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=17IqJzYAxRI-ur9Fn2Sgy4-8rJ8hVg0k9"
          />

        </Carousel>
        <center>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
            src="https://drive.google.com/uc?id=1Xq64C6KHUil5nJ-GPc7bcjOpDV6p-OI5" controls>
          </video>
        </center>
        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >

          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? jumanji_text : `${jumanji_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>

      {/* Natframes */}
      <div>
        <center>
          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Nat Frames</span>
            </p>
          </h5>

        </center>

        <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src={natframes}
          />
          <img className='object-contain h-full '
            alt="..."
            src={eve_natframes1}
          />
          <img className='object-contain h-full '
            alt="..."
            src={eve_natframes2}
          />

        </Carousel>
        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >

          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? nat_text : `${nat_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>

      {/* Van Mahotsav Week */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Van Mahotsav Week</span>
            </p>
          </h5>
        </center>


        <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=13et8dK4h_i56txcB4uvH_JLprJTW6zga"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1OctYjpB0-hCL0nDJ2qjMoJnTJ831d9q4"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=13CApd98xkpoudQhX-xktEZfpbqxU9ku_"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Gt_xRVFEgm80YJ0XA6JTINbkskU4A6UC"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1E2mmRzZ5sVZXZUDaiAO8JRqeTBtPSjdP"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1THaFrXYfc1ipSk8TqSzfP3oZcWVQH_Xl"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=142R01wCvott5ygSkRN_ROvSyBXr-uglF"
          />
        </Carousel>


        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >


          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? vmw_text : `${vmw_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>

      </div>

      {/* dmtp */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Disaster Management training Programme</span>
            </p>
          </h5>
        </center>


        <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1AjZnS5qYpNvBlYorhpZ8_mdVVztDP5_Z"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1qXTvbfHxUck6Pz-Fv5-yXMn9-S65jJYH"
          />
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=15gLOgobtGm5GUtyEzi2s0Nb3QsdocUhU"
          />
        </Carousel>


        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >
          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? dmtp_text : `${dmtp_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>

      </div>

      {/* World Environment Day */}
      <div>
        <center>

          <h5 className="text-2xl font-bold tracking-tight mt-4 mb-4 text-gray-900 dark:text-white ">
            <p >
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">World Environment Day</span>
            </p>
          </h5>
        </center>


        <Carousel className='h-80 w-auto ml-5 mr-5 mb-4 '  >
          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1Yzt1mjECAH22euNCM2NidFOhrVCkYf4j"
          />

          <img className='object-contain h-full '
            alt="..."
            src="https://drive.google.com/uc?export=view&id=1eHbAHN1G0eVKdktvoh8BoavhwNbzAgdf"
          />
        </Carousel>
        <center>
          <video className='sm: h-auto w-auto  md:w-auto md:ml-4 md:mr-4 lg:h-[480px] w-auto  mb-8'
            src="https://drive.google.com/uc?id=1JJlhoOwfEWBuGQP0a17Wul8lkzlQ5UjI" controls>
          </video>
        </center>
        <Card className='w-auto mx-6 mb-4 bg-green-100'
          href="#"
        >
          <center className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span>
            </p>
          </center>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              {showMore ? dmtp_text : `${dmtp_text.substring(0, 250)}`}
              <button className="btn text-sky-400 " onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>
            </p>
          </p>
        </Card>
      </div>
      <Footeri />
    </div>
  )
}

export default Events