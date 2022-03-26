import React, { useState } from "react";

const Forms = (props) => {
  const { getLoc } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [img, setImg] = useState("");
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  //   console.log(location);

  const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) =>
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => console.log("Xato shud:" + err)
    );
  };

  const submitting = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("img", img);
    formData.append("location", location);
    console.log(formData);
    getLoc(location);
  };

  return (
    <div>
      <form onSubmit={submitting}>
        <div className="info">
          <div>
            <h3>Name</h3>
            <h3>Phone Number</h3>
            <h3>Photo</h3>
            <h3>Location</h3>
          </div>
          <div className="inputs">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
            <input
              className="file"
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              placeholder="Enter photo"
            />
            <button onClick={position}>show location</button>
            {location.latitude !== null ? (
              <div>
                <i>{location.latitude + "; " + location.longitude}</i>
              </div>
            ) : null}
          </div>
        </div>
        <input className="sbtn" type="submit" />
      </form>
    </div>
  );
};

export default Forms;
