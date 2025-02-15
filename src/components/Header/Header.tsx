import Menu from "../Menu/Menu";
import './Header.css';
import {motion} from 'framer-motion'




export default function Header() {
       const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
    

     return (
        <motion.header whileHover={{ scale: 1.2 }} initial ={{y: -500}} animate={{ y: 0 }}
        transition={transition} className = 'header'>
                      <Menu/> 
        </motion.header>
        
    )
}