const Header = () => {
  return (
    <div className="bg-forest bg-cover bg-bottom p-4 flex-y items-center justify-center">
      <div className="mx-auto bg-icon bg-cover w-16 h-16 mt-6" />
      <div className="mx-auto w-90 bg-black mt-4 p-4 rounded-xl opacity-80 text-center mb-8">
        <h1 className="text-6xl font-bold">
          RedwoodJS
          <br />
          <span className="text-9xl font-bold">1.0</span>
          <br />
          Launch Week
        </h1>
      </div>
    </div>
  )
}

export default Header
