import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import unslpasImg from './lamine-removebg-preview.png'
const social = [
  { id: 1, icon: faYoutube, url: 'https://youtube.com' },
  { id: 2, icon: faGithub, url: 'https://github.com' },
  { id: 3, icon: faInstagram, url: 'https://instagram.com' },
  { id: 4, icon: faTwitter, url: 'https://twitter.com' },
  { id: 5, icon: faLinkedin, url: 'https://linkedin.com' },
];
const navMenu = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Header() {
  return (
    <header className={`bg-bg-primary flex flex-col min-h-screen `} id={navMenu[0]}>
      {/* logo and links */}
      <div className={`fixed z-50 bg-white w-full`}>

        <div className={` max-md:flex-col max-md:gap-4 border-b border-[#ccc] flex bg-white max-w-275 mx-auto px-8 py-6 justify-between items-center  text-primary`}>

          <a className={`text-2xl font-semibold`} href={`#${navMenu[0]}`}>Mahmoud Khateep </a>

          <div className={`flex max-md:gap-3  justify-center items-center gap-3.75 px-3.75`}>
            {navMenu.map((item) => {
              return (
                <a className={`font-semibold`} key={item} href={`#${item}`}>{item}</a>
              )
            })}
          </div>

        </div>
      </div>
      {/* text and img */}
      <div className={`max-md:flex-col max-md:pt-34 gap-10  items-center px-8 py-6 w-full  flex-1 bg-amber-200 flex max-w-275 mx-auto h-full`}>

        <div className={`flex-[1.5] max-md:w-full bg-amberc-400 max-md:flex-6  `}>
          <p className={`text-secondary font-bold text-xl max-sm:text-sm `}>hi my name is</p>
          <h1 className={`text-[60px] max-md:text-[50px] max-sm:text-[30px] pt-2.5 text-primary font-bold`}>Mahmoud Khateep</h1>
          <p className={`text-xl text-primary py-2.5 font-medium max-sm:text-sm`}>Frontend web developer</p>
          <div className={`pt-4 pb-8  flex gap-2.5    `}>
            {social.map((item) => {
              return (
                <a target={'_blank'} className={`text-[18px] hover:scale-85 duration-300 transition-all w-10 h-10 flex items-center justify-center  bg-gray-custom text-white rounded-full`} key={item.id} href={item.url}><FontAwesomeIcon icon={item.icon}></FontAwesomeIcon></a>
              )
            })}

          </div>
          <a className={`flex  w-fit gap-1 hover:bg-[#15a076] transition-all duration-300 items-center bg-secondary text-white py-2 px-5 text-[14px] rounded-[5px]`} href={`#${navMenu[1]}`}>
            <span>About Me</span>
            <FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
          </a>
        </div>

        <div className={`flex-1    `}><img className={`w-110 max-md:max-w-80 min-w-70`} src={unslpasImg} alt={'personl photo though it is not mine'} /></div>

      </div>

    </header>
  )
}