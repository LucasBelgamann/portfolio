import './App.css';
import Aboutme from './components/aboutme/Aboutme';
import Hards from './components/hards/Hards';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
     <Navbar />
     <Main />
     <Aboutme />
     <Hards />
     <Projects />
    </div>
  );
}

export default App;
