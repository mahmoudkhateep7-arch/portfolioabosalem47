const userInfo = [
  { f: "Age", s: 22 },
  { f: "Email", s: "contact@mohamedelkashef.com" },
  { f: "Place", s: "6 October - Egypt" }
];

export default function About() {
  return (
    <section id={'About'} className={`py-20 bg-amber-200d`}>
      <div className={`max-w-275 mx-auto px-8`}>
        {/* title and line in the middle alwasye */}
        <div className={`flex py-2 flex-col items-center bg-ambder-400 gap-4`}>
          <h2 className={`text-4xl max-sm:text-3xl font-bold capitalize`}>anout me</h2>
          <div className={`h-1 w-25 bg-green-500`}></div>
        </div>



        <div className={`flex gap-12 pt-14 max-md:flex-col`}>

          <div className={`flex-2`}>
            <h3 className={`text-3xl max-sm:text-xl text-primary pb-5 font-bold`}>I'm <span className={`text-secondary`}>Mahmoud Khateep</span>, a Web developer</h3>
            <p className={`text-gray-custom leading-[1.8]  pr-10 pb-3`}>I'm a front-end web developer with a strong passion for creating visually appealing and user-friendly web applications. I am very passionate about improving my coding skills & developing applications & websites.</p>
            <p className={`text-gray-custom leading-[1.8]  pr-10 `}>I have also gained a solid foundation in HTML, CSS, and JavaScript. I am always eager to learn new technologies and techniques to enhance my skillset.</p>

          </div>

          <div className={`flex-1 flex flex-col gap-5`}>
            {userInfo.map((item, index) => {
              return (
                <div className={`text-gray-custom pb-1.5 border-b flex gap-2`} key={item.f} style={{ display: 'flex', flexDirection: index == 1 ? 'column' : 'row' }}>
                  <span className={`font-bold text-xl flex items-center`}>{item.f}:</span>
                  <span className={` flex items-center text-[19px]`}>{item.s}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}