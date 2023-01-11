import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <Navbar
        avatarClicked={avatarClicked}
        setAvatarClicked={setAvatarClicked}
      />
    </div>
  );
}

export default App;
