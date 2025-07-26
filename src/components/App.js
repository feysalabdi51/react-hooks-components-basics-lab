import React from "react";

// Navbar Component
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div id="home">
      <h2>Welcome</h2>
    </div>
  );
}

// About Component (you need to add this one)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
