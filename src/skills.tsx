import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import techStack from "./data"
export default function Skills() {
  return (
    <section className={`bg-primary py-20`}>
      <div className={`max-w-275 mx-auto `}>

        <div className={`flex pb-20 flex-col items-center  gap-4`}>
          <h2 className={`text-4xl max-sm:text-3xl text-white font-bold capitalize flex gap-2 items-center`}>
            <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
            <span>skills  </span>
            <span>&</span>
            <span className={`text-secondary`}>abilites</span>
          </h2>
          <div className={`h-1 w-25 bg-green-500`}></div>
        </div>

        <div className={`bg-[#0f272d]`}>

          <div className={`grid  max-sm:grid-cols-1  grid-cols-4 gap-5 px-8 py-5 max-md:grid-cols-2`}>
            {techStack.map((item) => {
              return (
                <div className={`bg-[#333] transition-all duration-300 hover:scale-[1.08] cursor-pointer flex justify-center items-center flex-col gap-2 p-4 text-[18px] font-semibold text-white`} key={item.id}><img style={{ width: item.id == 3 ? '80px' : '40px' }} src={item.img} alt={item.name} /><span>{item.name}</span></div>
              )
            })}
          </div>

        </div>


      </div>
    </section>
  )
}