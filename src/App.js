import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
