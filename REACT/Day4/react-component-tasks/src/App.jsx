import Header from "./task1/Header.jsx";
import Navbar from "./task2/Navbar.jsx";
import Task2Home from "./task2/Home.jsx";
import About from "./task2/About.jsx";
import Footer from "./task2/Footer.jsx";
import ProductHome from "./task3/Home.jsx";

function App() {
  return (
    <main>
      <section>
        <h1>React Component Tasks</h1>
        <p>Tasks 1, 2 and 3 are implemented below.</p>
      </section>

      <section>
        <h2>Task 1 – Single Component</h2>
        <Header />
      </section>

      <section>
        <h2>Task 2 – Multiple Components</h2>
        <Navbar />
        <Task2Home />
        <About />
        <Footer />
      </section>

      <section>
        <h2>Task 3 – Nested & Reusable Components</h2>
        <ProductHome />
      </section>
    </main>
  );
}

export default App;