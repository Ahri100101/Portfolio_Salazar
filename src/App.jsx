import './App.css'
import main_pic from './assets/my-pic1.png'
import bg_element from './assets/bg-element.png'
import white_light from './assets/white-light.png'
import red_shadow from './assets/red-shadow.png'
//import cake from './assets/cake.jpg'

function App() {

  return (
    <div className='main'>
      <div className="top-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown"><a href="#designs">Designs</a>
            <div className="dropdown-content">
              <a href="#presentation">Presentation</a>
              <a href="#website">Website</a>
              <a href="#mobile-app">Mobile App</a>
              <a href="#magazine">Magazine</a>
              <a href="#logo">Logo</a>
              <a href="#drawing">Drawing</a>
            </div>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <img src={red_shadow} alt='red' className='red-shadow' />
      <div className='home'>
        <div className='home-left'>
          <h1 className='title'>Design Diaries: Shaping a Visual Narrative</h1>
          <p className='intro'>Welcome to my design sanctuary! Dive into a world
            where ideas and imagination collide, giving life to a collection that
            transcends boundaries. In my portfolio, each piece is a chapter in the
            story of crafting compelling visuals. From minimalist elegance to bold
            and vibrant creations, join me on a journey of creativity, innovation,
            and the pursuit of design excellence.</p>
          <div className='home-bottom'>
            <p className='not-button-text'>GET TO KNOW ME</p>
            <p className='not-button-text'>
              <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
            </p>
          </div>
        </div>
        <div className='home-right'>
          <img src={bg_element} alt='red' className='bg-element' />
          <img src={white_light} alt='white' className='white-light' />
          <img src={main_pic} alt='Ariz Ann Salazar' className='main-pic' />
        </div>
      </div>
    </div>
  )
}

export default App

/* <div className='page'>
  <img src={cake} alt="cake" className='cake' />
  <h1 className='test'>test</h1>
</div> */