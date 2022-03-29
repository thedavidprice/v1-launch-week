const Header = () => {
  return (
    <div className="bg-forest bg-cover bg-bottom p-0">
      <div className="bg-gradient-to-b from-transparent via-[#00000044] to-black bg-opacity-10 m-0 p-4 flex-y items-center justify-center">
        <div className="mx-auto bg-icon bg-cover w-16 h-16 mt-6 p-0" />
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold">
            RedwoodJS
            <br />
            <span className="text-9xl font-bold">1.0</span>
            <br />
            Launch Week
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
