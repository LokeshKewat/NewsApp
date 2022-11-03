import './App.css';
import { BrowserRouter as Router,Routes ,Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'D:\OneDrive\Desktop\MajorProject\project-app\node_modules\bootstrap\dist\css\bootstrap.min.css'
// import UseAxios from './Component/UseAxios';

function App() {
  return (<>
    
  
   <div>
 <Router>
 <Navbar/>
 

 <Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/About'element={<About/>}/>
  <Route path='/Contact'element={<Contact/>}/>
  </Routes>
  
  
 </Router>

 </div>
 </>

  );
}

export default App;
