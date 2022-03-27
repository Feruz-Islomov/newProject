import React from "react";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <div className="client">
        <h1>Client 1 (10:31)</h1>
        <p>
          name, tel, <br /> model, color, number, <h3>photo, location</h3>
        </p>
        <button>accept</button>
        <button>delete</button>
      </div>
      <div className="client">
        <h1>Client 2 (10:25)</h1>
        <p>
          name, tel, model, color, number, <h3>photo, location</h3>
        </p>
        <button>accept</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default AdminPage;
