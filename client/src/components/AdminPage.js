import React from "react";
import { Link } from "react-router-dom";
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
                <button>Reed more</button>
                <Link to={`/client/${data.id}`} state={{ data: data }}>
                  <button>View Details</button>
                </Link>
                <button onClick={() => deleteUser(data.id)}>delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AdminPage;
