import { useState } from "react";
import Boxes from "./components/Boxes";
import Forms from "./components/Forms";

function App() {
  const [getLocation, setGetLocation] = useState({});
  const getLoc = (a) => {
    setGetLocation(a);
    console.log(a);
  };

  return (
    <div className="App">
      <h2 className="ttl">Share Location</h2>
      <Forms getLoc={getLoc} />
      <Boxes getLocation={getLocation} />
    </div>
  );
}

export default App;
