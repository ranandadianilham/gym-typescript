import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Duis leo ante, molestie nec orci ac, varius sollicitudin arcu. Quisque vestibulum velit vitae est varius condimentum. Vestibulum non purus in tortor volutpat pulvinar et sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet lobortis nisi. Donec sit amet lacus in dolor bibendum fermentum quis ac risus. Duis vestibulum eros et ex ultricies aliquam.",
    image: image1,    
  },{
    name: "Yoga Classes",
    image: image2,    
  },{
    name: "Karate Classes",
    description: "Duis leo ante, molestie nec orci ac, varius sollicitudin arcu. Quisque vestibulum velit vitae est varius condimentum. Vestibulum non purus in tortor volutpat pulvinar et sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet lobortis nisi. Donec sit amet lacus in dolor bibendum fermentum quis ac risus. Duis vestibulum eros et ex ultricies aliquam.",
    image: image3,    
  },{
    name: "Swiming Classes",image: image4,    
  },{
    name: "Fitness Classes",
    description: "Duis leo ante, molestie nec orci ac, varius sollicitudin arcu. Quisque vestibulum velit vitae est varius condimentum. Vestibulum non purus in tortor volutpat pulvinar et sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet lobortis nisi. Donec sit amet lacus in dolor bibendum fermentum quis ac risus. Duis vestibulum eros et ex ultricies aliquam.",
    image: image5,    
  },{
    name: "Training Classes",
    description: "Duis leo ante, molestie nec orci ac, varius sollicitudin arcu. Quisque vestibulum velit vitae est varius condimentum. Vestibulum non purus in tortor volutpat pulvinar et sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet lobortis nisi. Donec sit amet lacus in dolor bibendum fermentum quis ac risus. Duis vestibulum eros et ex ultricies aliquam.",
    image: image6,    
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclassses">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}
      >
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden: { opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
        }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => {
              return (
                <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses