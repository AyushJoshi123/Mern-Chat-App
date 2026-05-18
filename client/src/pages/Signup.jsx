function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950">

      <div className="w-[400px] bg-zinc-900 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Signup
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
          />

          <button
            className="bg-green-600 hover:bg-green-700 transition-all text-white p-3 rounded-lg"
          >
            Signup
          </button>

        </form>

      </div>

    </div>
  )
}

export default Signup