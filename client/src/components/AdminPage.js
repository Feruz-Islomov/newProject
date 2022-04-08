import React from "react";
import { deleteUser } from "./Api";

const AdminPage = (props) => {
  const { datas } = props;
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
                <button onClick={() => deleteUser(data.id)}>delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AdminPage;
