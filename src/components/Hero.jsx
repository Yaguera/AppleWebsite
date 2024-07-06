import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleSetVideoSrc = () =>{
        setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleSetVideoSrc);
        return () =>{
            window.removeEventListener("resize", handleSetVideoSrc);
        };
    }, []);

    useGSAP(()=>{
        gsap.to('.hero-title',{
            opacity:1,
            delay: 2
        }),
        gsap.to('#cta',{
            opacity:1,
            delay: 2,
            y:-50
        })
    })
  return (
    <section className='w-full nav-height bg-black'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p className='hero-title'>iPhone 15 Pro</p>
            <div className="md:w-10/12 w-9/12">
                <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20"> {/* cta = call to action*/}
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero
