import '../assets/css/Home.css'
import main_pic from '../assets/my-pic1.png'
import bg_element from '../assets/bg-element.png'
import white_light from '../assets/white-light.png'
import red_shadow from '../assets/red-shadow.png' 

const home = () => {

    return (
        <div className='home-main'>
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
                            <span class="material-symbols-outlined">
                                arrow_drop_down
                            </span>
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

export default home