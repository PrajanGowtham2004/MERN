import { useState } from "react";

const App = () => {

  // EMPLOYEE FORM
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);
  const [employeeEdit, setEmployeeEdit] = useState(null);

  // PRODUCT FORM
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);
  const [productEdit, setProductEdit] = useState(null);

  // COURSE FORM
  const [course, setCourse] = useState({
    name: "",
    trainer: "",
    duration: ""
  });

  const [courses, setCourses] = useState([]);

  // EXPENSE FORM
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const [expenses, setExpenses] = useState([]);
  const [expenseEdit, setExpenseEdit] = useState(null);

  // STUDENT MARKS FORM
  const [student, setStudent] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: ""
  });

  const [students, setStudents] = useState([]);

  // COMMON INPUT HANDLERS
  const valueTake = (event, data, setData) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value
    });
  };

  // EMPLOYEE FUNCTIONS
  const addEmployee = (e) => {
    e.preventDefault();

    if (!employee.name.trim() ||
        !employee.department.trim() ||
        !employee.salary.trim()) {
      alert("Fill all employee fields");
      return;
    }

    if (employeeEdit === null) {
      setEmployees([...employees, { ...employee }]);
    } else {
      setEmployees(
        employees.map((item, i) =>
          i === employeeEdit ? { ...employee } : item
        )
      );
      setEmployeeEdit(null);
    }

    setEmployee({ name: "", department: "", salary: "" });
  };

  const editEmployee = (i) => {
    setEmployee({ ...employees[i] });
    setEmployeeEdit(i);
  };

  const deleteEmployee = (i) => {
    setEmployees(employees.filter((item, index) => index !== i));
    setEmployeeEdit(null);
    setEmployee({ name: "", department: "", salary: "" });
  };

  // PRODUCT FUNCTIONS
  const addProduct = (e) => {
    e.preventDefault();

    if (!product.name.trim() ||
        !product.price.trim() ||
        !product.quantity.trim()) {
      alert("Fill all product fields");
      return;
    }

    if (productEdit === null) {
      setProducts([...products, { ...product }]);
    } else {
      setProducts(
        products.map((item, i) =>
          i === productEdit ? { ...product } : item
        )
      );
      setProductEdit(null);
    }

    setProduct({ name: "", price: "", quantity: "" });
  };

  const editProduct = (i) => {
    setProduct({ ...products[i] });
    setProductEdit(i);
  };

  const deleteProduct = (i) => {
    setProducts(products.filter((item, index) => index !== i));
    setProductEdit(null);
    setProduct({ name: "", price: "", quantity: "" });
  };

  // COURSE FUNCTIONS
  const addCourse = (e) => {
    e.preventDefault();

    if (!course.name.trim() ||
        !course.trainer.trim() ||
        !course.duration.trim()) {
      alert("Fill all course fields");
      return;
    }

    setCourses([...courses, { ...course }]);
    setCourse({ name: "", trainer: "", duration: "" });
  };

  // EXPENSE FUNCTIONS
  const addExpense = (e) => {
    e.preventDefault();

    if (!expense.title.trim() ||
        !expense.amount.trim() ||
        !expense.category.trim()) {
      alert("Fill all expense fields");
      return;
    }

    if (expenseEdit === null) {
      setExpenses([...expenses, { ...expense }]);
    } else {
      setExpenses(
        expenses.map((item, i) =>
          i === expenseEdit ? { ...expense } : item
        )
      );
      setExpenseEdit(null);
    }

    setExpense({ title: "", amount: "", category: "" });
  };

  const editExpense = (i) => {
    setExpense({ ...expenses[i] });
    setExpenseEdit(i);
  };

  const deleteExpense = (i) => {
    setExpenses(expenses.filter((item, index) => index !== i));

    if (expenseEdit === i) {
      setExpenseEdit(null);
      setExpense({ title: "", amount: "", category: "" });
    } else if (expenseEdit !== null && expenseEdit > i) {
      setExpenseEdit(expenseEdit - 1);
    }
  };

  // STUDENT FUNCTIONS
  const addStudent = (e) => {
    e.preventDefault();

    if (!student.name.trim() ||
        student.tamil === "" ||
        student.english === "" ||
        student.maths === "") {
      alert("Fill all student fields");
      return;
    }

    const marks = [
      student.tamil,
      student.english,
      student.maths
    ];

    if (marks.some(mark => Number(mark) < 0 || Number(mark) > 100)) {
      alert("Each mark must be between 0 and 100");
      return;
    }

    setStudents([...students, { ...student }]);

    setStudent({
      name: "",
      tamil: "",
      english: "",
      maths: ""
    });
  };

  // UI
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>React Form Practice</h1>

      {/* EMPLOYEE FORM */}
      <hr />
      <h2>1. Employee Form</h2>

      <form onSubmit={addEmployee}>
        <input name="name" placeholder="Name"
          value={employee.name}
          onChange={e => valueTake(e, employee, setEmployee)} />

        <input name="department" placeholder="Department"
          value={employee.department}
          onChange={e => valueTake(e, employee, setEmployee)} />

        <input type="number" name="salary" placeholder="Salary"
          value={employee.salary}
          onChange={e => valueTake(e, employee, setEmployee)} />

        <button type="submit">
          {employeeEdit === null ? "Add Employee" : "Update Employee"}
        </button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Department</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td><td>{e.department}</td><td>{e.salary}</td>
              <td>
                <button type="button" onClick={() => editEmployee(i)}>Edit</button>
                <button type="button" onClick={() => deleteEmployee(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PRODUCT FORM */}
      <hr />
      <h2>2. Product Form</h2>

      <form onSubmit={addProduct}>
        <input name="name" placeholder="Product Name"
          value={product.name}
          onChange={e => valueTake(e, product, setProduct)} />

        <input type="number" name="price" placeholder="Price"
          value={product.price}
          onChange={e => valueTake(e, product, setProduct)} />

        <input type="number" name="quantity" placeholder="Quantity"
          value={product.quantity}
          onChange={e => valueTake(e, product, setProduct)} />

        <button type="submit">
          {productEdit === null ? "Add Product" : "Update Product"}
        </button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>Quantity</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td><td>{e.price}</td><td>{e.quantity}</td>
              <td>
                <button type="button" onClick={() => editProduct(i)}>Edit</button>
                <button type="button" onClick={() => deleteProduct(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* COURSE FORM */}
      <hr />
      <h2>3. Course Form</h2>

      <form onSubmit={addCourse}>
        <input name="name" placeholder="Course Name"
          value={course.name}
          onChange={e => valueTake(e, course, setCourse)} />

        <input name="trainer" placeholder="Trainer"
          value={course.trainer}
          onChange={e => valueTake(e, course, setCourse)} />

        <input name="duration" placeholder="Duration"
          value={course.duration}
          onChange={e => valueTake(e, course, setCourse)} />

        <button type="submit">Add Course</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Course</th><th>Trainer</th><th>Duration</th></tr>
        </thead>
        <tbody>
          {courses.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td><td>{e.trainer}</td><td>{e.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EXPENSE FORM */}
      <hr />
      <h2>4. Expense Form</h2>

      <form onSubmit={addExpense}>
        <input name="title" placeholder="Expense Title"
          value={expense.title}
          onChange={e => valueTake(e, expense, setExpense)} />

        <input type="number" name="amount" placeholder="Amount"
          value={expense.amount}
          onChange={e => valueTake(e, expense, setExpense)} />

        <select name="category" value={expense.category}
          onChange={e => valueTake(e, expense, setExpense)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">
          {expenseEdit === null ? "Add Expense" : "Update Expense"}
        </button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Title</th><th>Amount</th><th>Category</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {expenses.map((e, i) => (
            <tr key={i}>
              <td>{e.title}</td><td>{e.amount}</td><td>{e.category}</td>
              <td>
                <button type="button" onClick={() => editExpense(i)}>Edit</button>
                <button type="button" onClick={() => deleteExpense(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* STUDENT MARKS FORM */}
      <hr />
      <h2>5. Student Marks Form</h2>

      <form onSubmit={addStudent}>
        <input name="name" placeholder="Student Name"
          value={student.name}
          onChange={e => valueTake(e, student, setStudent)} />

        <input type="number" name="tamil" placeholder="Tamil Marks"
          min="0" max="100" value={student.tamil}
          onChange={e => valueTake(e, student, setStudent)} />

        <input type="number" name="english" placeholder="English Marks"
          min="0" max="100" value={student.english}
          onChange={e => valueTake(e, student, setStudent)} />

        <input type="number" name="maths" placeholder="Maths Marks"
          min="0" max="100" value={student.maths}
          onChange={e => valueTake(e, student, setStudent)} />

        <button type="submit">Add Student</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Tamil</th><th>English</th><th>Maths</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.tamil}</td>
              <td>{e.english}</td>
              <td>{e.maths}</td>
              <td>
                {Number(e.tamil) + Number(e.english) + Number(e.maths)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;

