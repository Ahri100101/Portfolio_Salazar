import '../assets/css/Intro.css'
import sec_pic from '../assets/my-pic2.png'
import bg_element from '../assets/bg-element.png'
import red_shadow from '../assets/red-shadow.png'

const Intro = () => {

    return (
        <div className="intro-main">
            <img src={red_shadow} alt='red' className='red-shadow2' />
            <p className='all-title'>SELF INTRODUCTION</p>
            <div className='personal'>
                <div className='personal-left'>
                    <img src={bg_element} alt='red' className='bg-element2' />
                    <img src={sec_pic} alt='Ariz Ann Salazar' className='sec-pic' />
                </div>
                <div className='personal-right'>
                    <p className='hello'>Hello!</p>
                    <p className='hello2'>My name is</p>
                    <p className='name'>Ariz Ann C. Salazar</p>
                    <p className='nickname'>Please feel free to call me "Ei"</p>
                    <p className='details'>Birth Date: October 1, 2001</p>
                    <p className='details'>Age:22</p>
                    <p className='details'>Sex: F</p>
                    <p className='details'>Pronouns: She/Her</p>
                </div>
            </div>
        </div>
    )
}

export default Intro