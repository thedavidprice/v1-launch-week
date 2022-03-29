const Header = () => {
  return (
    <div className="bg-forest bg-cover bg-bottom p-4 flex-y items-center justify-center">
      <div className="mx-auto bg-icon bg-cover w-16 h-16 mt-6" />
      <div className="mx-auto w-80 bg-black mt-4 p-4 rounded-xl opacity-80 text-center mb-8">
        <h1 className="text-3xl font-bold">RedwoodJS</h1>
        <h1 className="text-8xl font-bold">1.0</h1>
        <h1 className="text-3xl font-bold">Launch Week</h1>
      </div>
    </div>
  )
}

export default Header
