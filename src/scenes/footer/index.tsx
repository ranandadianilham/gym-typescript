import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex '>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt="logo" src={Logo} />
                <p className='my-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <p>© Copyright Served.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Contrary to popular belief</p>
                <p className='my-5'>the word in classical literature</p>
                <p>College in Virginia</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Tempus Adeptus</p>
                <p className='my-5'>classical literature, discovered the undoubtable source</p>
                <p>(333)1-4444-5555</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer