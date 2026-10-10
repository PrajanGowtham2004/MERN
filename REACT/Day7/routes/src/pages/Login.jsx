
const Login = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
            <div className="bg-blue-300 p-4 flex flex-col h-60 w-md items-center rounded-4xl justify-between">
                <input type="text" placeholder="Username" className="border p-2 m-2 rounded-4xl bg-amber-100 " />
                <input type="password" placeholder="Password" className="border p-2 m-2 rounded-4xl bg-amber-100" />
                <button className="bg-blue-500 text-white p-2 m-2 w-50 rounded-full">Login</button>
            </div>
        </div>
    </>
  )
}

export default Login 