import { useState } from "react";
import AdminPage from "./components/AdminPage";
import ClientPage from "./components/ClientPage";

function App() {
  const [getLocation, setGetLocation] = useState({});
  const getLoc = (latitude, longitude) => {
    setGetLocation({ latitude, longitude });
    console.log(latitude, longitude);
  };

  return (
    <div className="App">
      <h1 className="ttl">EcoWash</h1>
      <ClientPage getLocation={getLocation} getLoc={getLoc} />
      <AdminPage />
    </div>
  );
}

export default App;
