import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logo } from '../Images'
import Footeri from '../Components/Footer'
import Teamcard from '../Components/Teamcard'

function Team() {
    return (
        <div><section class=" dark:bg-gray-900">
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
                        <Navbar.Link className='text-white' active href="#">
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
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-4 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Team that makes us Great !!!</p>
                </div>
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Executive Body</h2>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Shivam"} por={"President"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihaEPljCAsEevHu062iLR1Cwj1x328OnMF4L7ladw_iVuiXus2ehLlpMZN75oBz2zPpbrFaOFXnwcnG24tDdsNEi3yStiCVMQrU=s2560"}
                    insta={"https://www.instagram.com/shivam_upadhyay1022"}
                    linkedin={"https://www.linkedin.com/in/shivam-849780225/"} />
                    <Teamcard name={"Subhashis Gorai"} por={" Vice President"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZVjqqevf8EmNpsvF5CcLVXRgq-JAilHDfXkVVfX_PPHw50BD3GrOGcwhPJbxYfY_WWN1d6lbv6oUMFv0iR-ZSQxmd4ZKvpwPk=s1600-rw-v1"}
                    insta={"https://www.instagram.com/Subhashis_gorai_"}
                    linkedin={"https://www.linkedin.com/in/subhashis-gorai-7b69531a0/"}
                    />
                    <Teamcard name={"Ashutosh Jha"} por={"Director"} 
                    imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"} />
                </div>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Naman Khatwani"} por={"General Secretary"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihb-LIRXaExdMLf68Sj7dsbO0_tCOHoLMiguhQWi-gePEJMDxcf8mJm4RxRLLOaoTNxJBt-g8Ikwk5tpbOqqXcUNspTz48TzOaQ=s2560"} 
                    linkedin={"https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"}/>
                    <Teamcard name={"Ankita Sharma"} por={"Joint General Secretary"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihb-nnZj8rEPUN_bLeVwrD9SlHcI6O3rInK7iRLU_Mz2LAtj3Z0ybJe5i20pGAQCn_GpDpvxCtYutabG1V2YXAoam4gzi0y1zsY=s1600-rw-v1"} 
                    insta={"https://www.instagram.com/_a_selenophile_1"} />
                    <Teamcard name={"Riya Sharma"} por={"Associate Director"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZprtQZkG7UpODMOOYzg2YaiABCocGu3V9LeWYY-2XAbzWxe_kUkc9RP5i_RvovoMjOaVU2aOLh0XF7ooAhlS09zk-lnLxbfhA=s1600-rw-v1"} 
                    linkedin={"https://www.linkedin.com/in/riya-sharma-682985261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    insta={"https://www.instagram.com/rish6.79?igsh=OW8yYTB3enA4MzB1"}/>
                </div>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Md. Raja Istekhar"} por={"Treasurer"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpiha78eumELYxo18QvnlJcXooWe-o5mEWIuQ07OXFGPEtrl0Np6G0gPB7tKlifOVpR_NnBFcl8vQvxTo-wATU0r8ubyXza9B8Wg=s2560"} 
                    linkedin={"https://www.linkedin.com/in/md-raja-istekhar-785a34252"}
                    insta={"https://www.instagram.com/mdraja.istekhar?igsh=NTUzMzU4NDBiOXNz"}/>
                    <Teamcard name={"Adietya Sinha"} por={"Joint Treasurer"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihap3pqJ8BkhTwiK-0vca3G1b7JQI6vo6rSqiasFWZzyYEp9mHaDIOh53ItNZfsT0IfNCorM3yAQZaPNMkdYrx9aSaunIQGV7S0=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/adietya-sinha-9a093b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    insta={"https://www.instagram.com/adietya.sinha/"} />
                    <Teamcard name={"Shreyansh"} por={"Joint Treasurer"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZQWX23-U1-K7twX1SNWAuW3GYSHlXJMUXmHgSRuI_C_Fz4ssdfsglxlPAzrIyZvF_ukE919at7iPgf-WrGjEWZ5YjFp3aEC0I=s1600-rw-v1"}
                    insta={"https://www.instagram.com/Shreyansh_203/"} />
                </div>

                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-16">Working Body</h2>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Saket"} por={"Event Head"} imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"} />
                    <Teamcard name={"Pratham Saha"} por={"Resource head"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZB3SMm5ZexHjcpA0LextykpwZtIwPICI1DZ94HDtlgFZ151WJACjLeFKHEdn72GOan9YjVHITU6D3ksdBobrFs60lO0wxx6n4=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/pratham-shaha-742472235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    insta={"https://www.instagram.com/prathamshaha?igsh=bDVqaGkyd256NnVo"} />
                    <Teamcard name={"Anant Bharti"} por={"Resource head"} 
                    imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"}
                    insta={"https://www.instagram.com/anant.bharti/"}
                    linkedin={"https://www.linkedin.com/in/anant-bharti-001094253/"}
                    />
                </div>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Aditya Chaturvedi"} por={"Content Head"} imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"} />
                    <Teamcard name={"Publicity Head"} por={"Harsh Kumar"} 
                    imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"}
                    linkedin={"https://www.linkedin.com/in/anant-bharti-001094253/"}
                    insta={"https://www.instagram.com/harsshh.xd/"}/>
                    <Teamcard name={"Ritik Kumar"} por={"Technical Head"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZrfRWoV6aOwVXZ9hJmKzPnOCy_4sZjXdGylWKAah3wHNT3qLdNX8uoglkPnmc_3HRAv-nEt85PDkBaZ7CxwdoyiwzatJFfXw=s1600-rw-v1"}
                    insta={"https://www.instagram.com/singh__ritik22_/"}
                    linkedin={"https://www.linkedin.com/in/ritik-kumar-940926239/"}/>
                </div>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                <Teamcard name={"Shivam"} por={"Sponsorship Head"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihaEPljCAsEevHu062iLR1Cwj1x328OnMF4L7ladw_iVuiXus2ehLlpMZN75oBz2zPpbrFaOFXnwcnG24tDdsNEi3yStiCVMQrU=s2560"}
                    insta={"https://www.instagram.com/shivam_upadhyay1022"}
                    linkedin={"https://www.linkedin.com/in/shivam-849780225/"} />
                </div>
                <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Sweta"} por={"Event Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihbfCFXe5zYFXIyM3dheg3PuP_Epk5DRuohPL7Bt2WsHoJgcYIzOlhJQvpkxCkaDI-F7OJEjQVKB2HBWerocOeTqewFUcNpzQm0=s1600-rw-v1"}
                    insta={"https://www.instagram.com/__born___stubborn__/"}
                    linkedin={"https://www.linkedin.com/in/sweta-kumari-1163b524a/"}/>
                    <Teamcard name={"Souvik Mandal"} por={"Event Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihYmLNXEqYV_rKBliLPVdizxx85-o-WxVm6bY89-r0mrwJnGjjOXdab-kaLGJy7V1cXSexXiRSK4tgornFhvUC0zqEB3hviVow=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/souvik-mandal-620ab2275/"}
                    insta={"https://www.instagram.com/heyy.svikk_/"} />
                    <Teamcard name={"Aditya Singh"} por={"Design Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZGDnb8Due1ZxkMVKE-yQdvMT6YUOc46yQJFRqb0lZZ7J_oQPsZsufIpKOF15F3DFLHyIkNC42wYyTwgMB8uc8V9SDsWIGijF0=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/aditya-singh7"}
                    insta={"https://www.instagram.com/aditya.sz_/"} />
                    </div>
                    <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Akhileshwar Pathak"} por={"Design Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihbmF8H9X6ZhKZE0D2A35GemJHKym_hxJdxQYi_PJT5Yw4lE6huIMKxiK83hF2uns5VtAdmfVSm1fhmHt2YQxiGbAHNN3KR5GJk=s1600-rw-v1"} 
                    linkedin={"https://www.linkedin.com/in/akhileshwar-pathak-98aa9b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    insta={"https://www.instagram.com/akhileshwar_pathak_?igsh=bXZqcXM4N3I4b2hh"}/>
                    <Teamcard name={"Ritesh"} por={"Resource Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihb-HSehC4Oxo2fkqAnd5B2rvSd-HQ4ldutyHpH9z_z5_NaaseLF6J97AfEW1SPhux8RuSfJyzDE5ilL79soyHMgnajOalaArg=s2560"} 
                    linkedin={"https://www.linkedin.com/in/ritesh-kumar-48a2a2258"}
                    insta={"https://www.instagram.com/kumar_ritesh_03?igsh=Y2hhbmlqZnZhbTZ2"}/>
                    <Teamcard name={"Harshit"} por={"Content Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihb2rOvHx9KGj6oJgO0tqcCK02-NlWfzhv18D9J_w-Uig_ckohTQmHDqi2mrJWdhXIjfrHllJvVtq1pMc6fqqE5vjOkKfQEY_oY=s2560g"}
                    inkedin={"https://www.linkedin.com/in/harshit-bajaj-08b793218"} />
                    </div>
                    <div className='flex md:flex-row gap-20 flex-col justify-center ' >
                    <Teamcard name={"Somesh"} por={"Publicity Coordinator"} imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"} />
                    <Teamcard name={"Md.Sufiyan"} por={"Publicity Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZ4-Gk6uazPeGU0gOZNjSx7F0JtmjaE-9ZkQd8vucc9CiIHnkrrJcsqQJEIMsHeE1G-Qu7R9bzDTd7pQMM5kq9NX2yenELYlKU=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/md-sufiyan-61821225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                     insta={"https://www.instagram.com/aditya.sz_/"}/>
                    <Teamcard name={"Aditya Sinha"} por={"Technical Coordinator"} imgurl={"https://drive.google.com/file/d/1JBcmAjltbXBabTmUCoi_HPW-Ii2URR3C/view?usp=sharing"} />
                    <Teamcard name={"Abhijeet"} por={"Technical Coordinator"} 
                    imgurl={"https://lh3.googleusercontent.com/drive-viewer/AKGpihabXdUsIQ5qgJhzZ5qS8qU23lHXlr_L48952lYmbBpz8wgVIRGVvpgkBeUHpLqBAHgCJWDH3c0wXZUWI0idrt_ezvCKBgjb1iM=s1600-rw-v1"}
                    linkedin={"https://www.linkedin.com/in/abhijeet-kumar-b99770249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    insta={"https://www.linkedin.com/in/abhijeet-kumar-b99770249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} />
                </div>
            </div>
        </section>
        <footer><Footeri /></footer>
            
        </div>
    )
}

export default Team