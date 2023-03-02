import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pd-0'
    >
        {/* imageg and header */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* heading */}
                <motion.div className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:content-evolvetext before:-left-20 before:first-letter before:z-[-1] md:before:content-evolvetext'>
                            <img alt="home-page-text" src={HomePageText} />        
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </motion.div>
                {/* action */}
                <motion.div className='mt-8 flex items-center gap-8 '
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink
                    className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            
            {/* image */}
            <div className='flex basis-3/6 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img alt='home-page-graphic' src={HomePageGraphic} />
            </div>
        </motion.div>
        
        {/* sponsor */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img alt="redbull-sponsor" src={SponsorRedBull} />
                        <img alt="fortune-sponsor" src={SponsorFortune} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home