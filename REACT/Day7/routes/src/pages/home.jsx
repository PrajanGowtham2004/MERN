
const Home = () => {

  const datas= [{name:"Prajan", age: 25}, {name:"Rohit", age: 30}, {name:"Sita", age: 28}]
  return (
    <>
    <div>Home</div>
    <div className="bg-green-400 p-4 flex flex-column h-50 items-center justify-center gap-10">
      {datas.map((e,i)=>(
        <div key={i+1} className="bg-white p-4 m-2">
          <h1>{e.name}</h1>
          <p>{e.age}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home