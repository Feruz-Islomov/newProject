import { useEffect, useState } from "react";
import AdminPage from "./components/AdminPage";
import { fetchData } from "./components/Api";
import ClientPage from "./components/ClientPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SingleClient from "./components/SingleClient";

function App() {
  const [getLocation, setGetLocation] = useState({});
  const [datas, setDatas] = useState([]);
  const getData = () => {
    fetchData(setDatas);
  };
  const deleteClient = (id) => {
    const filtered = datas.filter((x) => x.id !== id);
    setDatas(filtered);
  };
  useEffect(() => {
    getData();
  }, []);

  const getLoc = (latitude, longitude) => {
    setGetLocation({ latitude, longitude });
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <h1 className="ttl">EcoWash</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/client"
            element={
              <ClientPage
                getLocation={getLocation}
                getLoc={getLoc}
                getData={getData}
              />
            }
          />
          <Route
            path="/client/:id"
            element={<SingleClient getLocation={getLocation} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPage
                getData={getData}
                datas={datas}
                deleteClient={deleteClient}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
