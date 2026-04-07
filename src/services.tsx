import { skillsArray } from "./skillsData";

export default function Services() {
  return (
    <section id={'Services'} className={`pt-10 pb-20 bg-green-500`}>
      <div className={`max-w-275 mx-auto `}>

        <div className={`flex pb-20 pt-10 flex-col items-center  gap-4`}>
          <h2 className={`text-4xl max-sm:text-3xl text-black font-bold capitalize flex gap-3 items-center`}>
            <img className={`w-10    `} src={skillsArray[1].url} alt="services" />
            <span className={`pl-2.5`}>my</span>
            <span className={`text-white `}>services</span>
          </h2>
          <div className={`h-1 w-25 bg-green-500`}></div>
        </div>

        <div className={`grid max-sm:grid-cols-1 grid-cols-3 gap-y-6 gap-x-3 px-8 max-md:grid-cols-2`}>
          {skillsArray.map((item) => {
            return (
              <div className={`bg-white flex 
              flex-col  transition-all duration-300 hover:scale-[1.02] cursor-pointer  items-center justify-center gap-2 p-4  text-center`} key={item.id}>
                <img className={`w-15  object-cover`} src={item.url} alt={item.title} />
                <h3 className={`text-xl font-bold`}>{item.title}</h3>
                <p className={'text-[14px'}>{item.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}