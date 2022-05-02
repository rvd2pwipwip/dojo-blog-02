import { useState } from "react";

const Home = () => {
  // let name = "Mario";
  const [name, setName] = useState("Mario");

  const handleClick = () => {
    setName("Luigi");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
