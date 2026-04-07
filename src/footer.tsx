export default function Footer() {
  return (
    <footer className={`bg-black text-white`}>
      <div className={`max-w-275 mx-auto`}>
        <p className={`flex justify-center items-center py-4 text-xl`}>All rigths preserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}