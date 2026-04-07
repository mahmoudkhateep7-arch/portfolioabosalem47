import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getintouch from './contact-removebg-preview.png'
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <section id={`Contact`} className={`pb-20 pt-10 bg-green-100 `}>
      <div className={`max-w-275 mx-auto`}>

        <div className={`flex pb-20  pt-10 flex-col items-center  gap-4`}>
          <h2 className={`text-4xl max-sm:text-3xl text-black font-bold capitalize flex gap-1 items-center`}>
            <FontAwesomeIcon className={``} icon={faHeadset}></FontAwesomeIcon>
            <span className={`pl-2.5`}>get in </span>
            <span className={`text-secondary `}>touch</span>
          </h2>
          <div className={`h-1 w-25 bg-green-500`}></div>
        </div>

        <div className={`flex gap-10 bg-white px-8 py-6 max-md:flex-col max-md:gap-20`}>
          <div className={`flex-1 flex justify-center items-center`}><img className={`max-md:max-w-60 w-full`} src={getintouch} alt="contact" /></div>
          <div className={`flex-1 flex flex-col gap-5`}>
            <input className={`p-4 text-xl border bg-s bg-green-100 `} type="text" name="name" id="name" placeholder={'Name'} />
            <input className={`p-4 text-xl border bg-s bg-green-100 `} type="email" name={'email'} id={`email`} placeholder={'Emil'} />
            <textarea className={`h-50 border text-xl  bg-green-100 p-4 max-h-50 min-h-50`} name="mes" id="mes" placeholder={'Message'}></textarea>
            <button className={'w-fit px-8 py-2 rounded-md cursor-pointer bg-secondary text-white text-xl'}>Submit</button>
          </div>
        </div>

      </div>
    </section>
  )
}