
import { useState } from 'react'

function App() {

  // Task 1: Toggle True / False
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  // Task 2: Like Button
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  // Task 3: Update an Object
  const [user, setUser] = useState({
    name: 'Rahul',
    age: 22,
    city: 'Chennai'
  })

  const handleChangeName = () => {
    setUser({ ...user, name: 'Arjun' })
  }

  const handleIncreaseAge = () => {
    setUser({ ...user, age: user.age + 1 })
  }

  const handleChangeCity = () => {
    setUser({ ...user, city: 'Bangalore' })
  }

  // Task 4: Update an Object Inside an Array
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 50000, inStock: true },
    { id: 2, name: 'Phone', price: 20000, inStock: false },
    { id: 3, name: 'Tablet', price: 15000, inStock: true }
  ])

  const handleToggleStock = (id) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    )
  }

  // Task 5: Student Management
  const [students, setStudents] = useState([
    { id: 1, name: 'Ravi', marks: 75, isPassed: true },
    { id: 2, name: 'Priya', marks: 35, isPassed: false },
    { id: 3, name: 'Kumar', marks: 90, isPassed: true }
  ])

  const handleIncreaseMarks = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id
          ? { ...student, marks: student.marks + 5 }
          : student
      )
    )
  }

  const handleToggleResult = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id
          ? { ...student, isPassed: !student.isPassed }
          : student
      )
    )
  }

  const handleDeleteStudent = (id) => {
    setStudents(prev =>
      prev.filter(student => student.id !== id)
    )
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        React useState Practice
      </h1>

      {/* Task 1 */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          Task 1 - Toggle True / False
        </h2>

        <p className="mb-3">
          Status: {isOn ? 'ON' : 'OFF'}
        </p>

        <button
          onClick={handleToggle}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      </section>

      {/* Task 2 */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          Task 2 - Like Button
        </h2>

        <h3 className="text-lg font-semibold">My Post</h3>
        <p className="mb-3">Click the Like button!</p>

        <button
          onClick={handleLike}
          className="bg-pink-500 text-white p-2 rounded"
        >
          {isLiked ? 'Liked ❤️' : 'Like'}
        </button>

        {isLiked && (
          <p className="text-green-600 mt-3">
            You liked this post!
          </p>
        )}
      </section>

      {/* Task 3 */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          Task 3 - Update an Object
        </h2>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={handleChangeName}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Change Name
          </button>

          <button
            onClick={handleIncreaseAge}
            className="bg-green-500 text-white p-2 rounded"
          >
            Increase Age
          </button>

          <button
            onClick={handleChangeCity}
            className="bg-purple-500 text-white p-2 rounded"
          >
            Change City
          </button>
        </div>
      </section>

      {/* Task 4 */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          Task 4 - Product Stock Management
        </h2>

        {products.map(product => (
          <div
            key={product.id}
            className="border p-3 mb-3 rounded"
          >
            <h3 className="font-bold">{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

            <button
              onClick={() => handleToggleStock(product.id)}
              className="bg-blue-500 text-white p-2 rounded mt-2"
            >
              Toggle Stock
            </button>
          </div>
        ))}
      </section>

      {/* Task 5 */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">
          Task 5 - Student Management
        </h2>

        {students.map(student => (
          <div
            key={student.id}
            className="border p-3 mb-3 rounded"
          >
            <h3 className="font-bold">{student.name}</h3>

            <p>Marks: {student.marks}</p>

            <p className={student.isPassed ? 'text-green-600' : 'text-red-600'}>
              Result: {student.isPassed ? 'Pass' : 'Fail'}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => handleIncreaseMarks(student.id)}
                className="bg-green-500 text-white p-2 rounded"
              >
                Increase Marks
              </button>

              <button
                onClick={() => handleToggleResult(student.id)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Toggle Result
              </button>

              <button
                onClick={() => handleDeleteStudent(student.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete Student
              </button>
            </div>
          </div>
        ))}

        {students.length === 0 && (
          <p>No students available.</p>
        )}
      </section>

    </div>
    </>
  )
}

export default App
