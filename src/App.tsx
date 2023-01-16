import { useState } from "react";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <Navbar setAvatarClicked={setAvatarClicked} />
      <Homepage />
    </div>
  );
}

export default App;
