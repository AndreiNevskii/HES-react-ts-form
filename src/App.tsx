import {Route, Routes} from 'react-router-dom';
import Homepage from './routes/Homepage/Homepage';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import Comments from './routes/Comments/Comments';
import './App.css';
import Layout from './components/Layout/Layout';



export default function App() {
   return (
     <Routes>
      <Route path="/" element = {<Layout/>}>
       <Route index element = {<Homepage/>}/>
       <Route path="/about" element = {<About/>}/>
       <Route path="/blog" element = {<Blog/>}/>
       <Route path="/comments" element = {<Comments/>}/>
       </Route>
     </Routes>
   )
}