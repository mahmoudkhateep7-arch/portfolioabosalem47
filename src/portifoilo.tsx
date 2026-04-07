import { portifoiloArray } from "./portiloiarray";

export default function Portfolio() {
  return (
    <section id={'Portfolio'} className={`pt-10 pb-20`}>
      <div className={`max-w-275 mx-auto`}>

        <div className={`flex pb-20  pt-10 flex-col items-center  gap-4`}>
          <h2 className={`text-4xl max-sm:text-3xl text-black font-bold capitalize flex gap-3 items-center`}>
            <img className={`w-10    `} src={portifoiloArray[1].imgurl} alt="services" />
            <span className={`pl-2.5`}>my</span>
            <span className={`text-secondary `}>portifoilo</span>
          </h2>
          <div className={`h-1 w-25 bg-green-500`}></div>
        </div>

        <div className={`grid grid-cols-3 max-sm:grid-cols-1  gap-8 px-8 max-md:grid-cols-2`}>
          {portifoiloArray.map((item) => {
            return (
              <div className={`bg-white flex border rounded-2xl
              flex-col  transition-all duration-300 hover:scale-[1.02] cursor-pointer      `} key={item.title}>
                <img className={`w-full rounded-[16px_16px_0_0] border-b pb-3  object-cover`} src={item.imgurl} alt={item.title} />
                <h3 className={`text-xl pl-4 pt-4 font-bold`}>{item.title}</h3>
                <a href={'https://youtube.com'} className={'text-[14px pl-4 pb-4 text-secondary font-medium'}>view website</a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}