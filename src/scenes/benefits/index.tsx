import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { motion} from "framer-motion"
import Benefit from './Benefit';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefit: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: 
        "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    },{
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's diverse classes",
        description: 
        "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    },{
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainer",
        description: 
        "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
    
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id='benefit'
    className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* header */}
            <motion.div className='md:my-5 md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
            </motion.div>
            {/* benefit */}
            <motion.div className='md:flex items-center justify-between gap-8 mt-5'
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
                {benefit.map((benefit: BenefitType) => {
                    return <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                })}
            </motion.div>
            
            {/* graphic & desc */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* graphic */}
                <img
                className='mx-auto'
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                />
                
                {/* desc */}
                <div>
                    {/* title */}
                    <div className='relative '>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: { opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0}
                            }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className='text-primary-500'>FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* desc */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                    >
                        <p className='my-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <p className='mb-5'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </motion.div>
                    
                    {/* button */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits