import React, { useState } from "react";

const Forms = (props) => {
  const { getLoc } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [carnum, setCarnum] = useState("");
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
    formData.append("model", model);
    formData.append("color", color);
    formData.append("carnum", carnum);
    formData.append("img", img);
    formData.append("location", location);
    console.log(formData);
    getLoc(location);
  };

  return (
    <div>
      <form onSubmit={submitting}>
        <div className="ttl">Guest details</div>
        <div className="info">
          <div>
            <div>Name:</div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div>
            <div>Tel:</div>
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <div>Car model:</div>
            <input
              type="text"
              onChange={(e) => setModel(e.target.value)}
              placeholder="Nexia 2"
            />
          </div>
          <div>
            <div>Car color:</div>
            <input
              type="text"
              onChange={(e) => setColor(e.target.value)}
              placeholder="white"
            />
          </div>
          <div>
            <div>Car number:</div>
            <input
              type="text"
              onChange={(e) => setCarnum(e.target.value)}
              placeholder="AA 777 A"
            />
          </div>
          <div>
            <div>Photo in current place:</div>
            <input
              className="file"
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              placeholder="Enter photo"
            />
          </div>
          <div>
            <div>Location:</div>
            <button className="gps" onClick={position}>
              press here for location
            </button>
          </div>

          {location.latitude !== null ? (
            <div>
              <i>{location.latitude + "; " + location.longitude}</i>
            </div>
          ) : null}
        </div>
        <button className="sbtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
