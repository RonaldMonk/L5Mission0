
import './App.css'
import MainHeading from './components/MainHeading.jsx';
import ComponentSection from './components/ComponentSection.jsx';
import SearchSection from './components/SearchSection.jsx';
import blowingBubbles from './assets/blowingBubbles.png';
import fisherman from './assets/fisherman.png';

export default function App() {


  return (
    <>
      <MainHeading />
      <SearchSection />
      <div className="compSections">
        <ComponentSection componentImage={blowingBubbles}/>
        <ComponentSection componentImage={fisherman}/>
        
      </div>
      
    </>
  )
}

