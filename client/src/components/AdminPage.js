import React, { useEffect, useState } from "react";
import { getData } from "./Api";

const AdminPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(datas);
  return (
    <div className="AdminPage">
      {datas.length > 0
        ? datas.map((data) => {
            return (
              <div className="client" key={data.id}>
                <h1>
                  {data.name} ({data.time})
                </h1>
                <p>
                  {data.phone}, <br /> {data.model}, <br />
                  {data.color},<br /> {data.carnum},<br />
                  {data.latitude}, {data.longitude}
                </p>
                <button>accept</button>
                <button>delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AdminPage;
