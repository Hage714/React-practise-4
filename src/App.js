import React from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import CaptureName from "./components/CaptureName";
import Footer from "./components/Footer";
import Activities from "./components/Activities";
import TodoItem from "./components/TodoItem";



function App() {
    const items = [
      {
        id: 1,
        name: "Hiking",
        status: "active"
      },
      {
        id: 2,
        name: "Swimming",
        status: "inactive"
      },
      {
        id: 3,
        name: "Cycling",
        status: "active"
      }
    ];
  return (
    <div className="App">
      <Navbar name = "Chun" />
      <Counter />
      <CaptureName />
      <Footer />
      <Activities items={items} />
      <TodoItem items={items} />
    </div>
  );
}

export default App;
