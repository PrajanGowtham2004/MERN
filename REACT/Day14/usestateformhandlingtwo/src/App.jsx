
import { useState } from 'react'

function App() {
  // Task 1: Student List
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])

  const handleStudentChange = (e) => setStudentName(e.target.value)

  const handleAddStudent = () => {
    if (studentName.trim() === '') return
    setStudents([...students, studentName.trim()])
    setStudentName('')
  }

  // Task 2: Course List
  const [courseName, setCourseName] = useState('')
  const [courses, setCourses] = useState([])

  const handleCourseChange = (e) => setCourseName(e.target.value)

  const handleAddCourse = () => {
    if (courseName.trim() === '') return
    setCourses([...courses, courseName.trim()])
    setCourseName('')
  }

  const handleDeleteCourse = (indexToDelete) => {
    setCourses(courses.filter((item, index) => index !== indexToDelete))
  }

  // Task 3: Number List
  const [number, setNumber] = useState('')
  const [numbers, setNumbers] = useState([])

  const handleNumberChange = (e) => setNumber(e.target.value)

  const handleAddNumber = () => {
    if (number.trim() === '') return
    setNumbers([...numbers, Number(number)])
    setNumber('')
  }

  // Task 4: Fruit List
  const [fruitName, setFruitName] = useState('')
  const [fruits, setFruits] = useState([])
  const [fruitEditIndex, setFruitEditIndex] = useState(null)

  const handleFruitChange = (e) => setFruitName(e.target.value)

  const handleAddFruit = () => {
    if (fruitName.trim() === '') return
    setFruits([...fruits, fruitName.trim()])
    setFruitName('')
  }

  const handleEditFruit = (index) => {
    setFruitName(fruits[index])
    setFruitEditIndex(index)
  }

  const handleUpdateFruit = () => {
    if (fruitName.trim() === '' || fruitEditIndex === null) return

    setFruits(
      fruits.map((item, index) =>
        index === fruitEditIndex ? fruitName.trim() : item
      )
    )

    setFruitName('')
    setFruitEditIndex(null)
  }

  // Task 5: Employee List
  const [employeeName, setEmployeeName] = useState('')
  const [employees, setEmployees] = useState([])
  const [employeeEditIndex, setEmployeeEditIndex] = useState(null)

  const handleEmployeeChange = (e) => setEmployeeName(e.target.value)

  const handleAddEmployee = () => {
    if (employeeName.trim() === '') return
    setEmployees([...employees, employeeName.trim()])
    setEmployeeName('')
  }

  const handleEditEmployee = (index) => {
    setEmployeeName(employees[index])
    setEmployeeEditIndex(index)
  }

  const handleUpdateEmployee = () => {
    if (employeeName.trim() === '' || employeeEditIndex === null) return

    setEmployees(
      employees.map((item, index) =>
        index === employeeEditIndex ? employeeName.trim() : item
      )
    )

    setEmployeeName('')
    setEmployeeEditIndex(null)
  }

  const handleDeleteEmployee = (indexToDelete) => {
    setEmployees(
      employees.filter((item, index) => index !== indexToDelete)
    )

    if (employeeEditIndex === indexToDelete) {
      setEmployeeName('')
      setEmployeeEditIndex(null)
    } else if (
      employeeEditIndex !== null &&
      employeeEditIndex > indexToDelete
    ) {
      setEmployeeEditIndex(employeeEditIndex - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        React State Management Tasks
      </h1>

      {/* Task 1: Student List */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Task 1 - Student Name List</h2>

        <input
          value={studentName}
          onChange={handleStudentChange}
          placeholder="Enter student name"
          className="border p-2 rounded mr-2 mb-2"
        />

        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Student
        </button>

        {students.map((item, index) => (
          <p key={index} className="mt-2">
            {index + 1}. {item}
          </p>
        ))}
      </section>

      {/* Task 2: Course List */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Task 2 - Course List</h2>

        <input
          value={courseName}
          onChange={handleCourseChange}
          placeholder="Enter course name"
          className="border p-2 rounded mr-2 mb-2"
        />

        <button
          onClick={handleAddCourse}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Course
        </button>

        {courses.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-2">
            <span>{item}</span>
            <button
              onClick={() => handleDeleteCourse(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </section>

      {/* Task 3: Number List */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Task 3 - Number List</h2>

        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter a number"
          className="border p-2 rounded mr-2 mb-2"
        />

        <button
          onClick={handleAddNumber}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Number
        </button>

        {numbers.map((item, index) => (
          <p key={index} className="mt-2">
            {item} - {item % 2 === 0 ? 'Even' : 'Odd'}
          </p>
        ))}
      </section>

      {/* Task 4: Fruit List */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Task 4 - Fruit List Update</h2>

        <input
          value={fruitName}
          onChange={handleFruitChange}
          placeholder="Enter fruit name"
          className="border p-2 rounded mr-2 mb-2"
        />

        {fruitEditIndex === null ? (
          <button
            onClick={handleAddFruit}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Fruit
          </button>
        ) : (
          <button
            onClick={handleUpdateFruit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Save
          </button>
        )}

        {fruits.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-2">
            <span>{item}</span>
            <button
              onClick={() => handleEditFruit(index)}
              className="bg-yellow-500 p-2 rounded"
            >
              Update
            </button>
          </div>
        ))}
      </section>

      {/* Task 5: Employee List */}
      <section className="bg-white p-5 mb-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">Task 5 - Employee Management</h2>

        <input
          value={employeeName}
          onChange={handleEmployeeChange}
          placeholder="Enter employee name"
          className="border p-2 rounded mr-2 mb-2"
        />

        {employeeEditIndex === null ? (
          <button
            onClick={handleAddEmployee}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Employee
          </button>
        ) : (
          <button
            onClick={handleUpdateEmployee}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Save Changes
          </button>
        )}

        {employees.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-2">
            <span>{item}</span>

            <button
              onClick={() => handleEditEmployee(index)}
              className="bg-yellow-500 p-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDeleteEmployee(index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
