import ProductCard from "./ProductCard";
import React from "react";
function Home() {
  return (
    <main className="home">
      <h2>Welcome to Home Page</h2>
      <p>Task 2 - Multiple Components</p>

      <div className="products">
        <ProductCard productName="Wireless Headphones" price="₹1,999" />
        <ProductCard productName="Smart Watch" price="₹2,499" />
        <ProductCard productName="Bluetooth Speaker" price="₹1,499" />
      </div>
    </main>
  );
}

export default Home;