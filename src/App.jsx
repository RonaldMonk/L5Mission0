
import './App.css'
import MainHeading from './components/MainHeading.jsx';
import ComponentSection from './components/ComponentSection.jsx';
function App() {


  return (
    <>
      <MainHeading />
      <div className="compSections">
        <ComponentSection />
        <ComponentSection />
        <ComponentSection />
      </div>
      
    </>
  )
}

export default App
