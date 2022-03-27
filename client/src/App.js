import { useState } from "react";
import AdminPage from "./components/AdminPage";
import ClientPage from "./components/ClientPage";

function App() {
  const [getLocation, setGetLocation] = useState({});
  const getLoc = (a) => {
    setGetLocation(a);
    console.log(a);
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
