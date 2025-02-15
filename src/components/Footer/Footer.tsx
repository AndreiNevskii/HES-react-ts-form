import './Footer.css'
import {motion} from 'framer-motion'

export default function Footer() {
    let date = (new Date()).getFullYear();
    


    return (
        <motion.footer  
        initial = {{
          x: 2000,
          opacity: 0,
          color: 'rgb(248, 242, 242)',
          background: 'rgba(252, 5, 5, 0.99)'
     
        }}
        
        animate={{
          x: 0,
          opacity: 1,
          color: 'rgb(0, 0, 0)',
        background: 'rgb(242, 245, 234)',
          transition: {
            delay: 1,
            duration: 2,
            ease: "easeInOut",
            opacity: { ease: "linear" },
          }
        }} className='footer'>
          &copy; Все права защищены "Андрей". {date}
        </motion.footer>
    )
}