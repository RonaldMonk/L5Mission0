import './MainHeading.css';
export default function MainHeading() {
  
  return (
    <div className="left-menu">
      <div>
        <img id="ma-image" src="/src/assets/ma.png" height="20px" width="30px" />
        <span>Marketing Association NZ</span>
      </div>
      
      <nav>
        <div className="desktop">
          <ul className="menu-list">
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="mobile">
          <a href="#hamburgerIcon">☰</a>
        </div>
      </nav>
    </div>
  )
}
