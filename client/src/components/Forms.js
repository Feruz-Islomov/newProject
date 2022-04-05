import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postData } from "./Api";

const Forms = (props) => {
  const { getLoc } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [carnum, setCarnum] = useState("");
  const [img, setImg] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (err) => console.log("Xato shud:" + err)
    );
  };

  const submitting = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", uuidv4());
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("model", model);
    formData.append("color", color);
    formData.append("carnum", carnum);
    formData.append("img", img);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("time", new Date().toLocaleTimeString());
    // formData.append("time", new Date().toISOString());
    // formData.append("time", new Date().toDateString());
    // formData.append("time", new Date().toLocaleDateString());
    // formData.append("time", new Date().toLocaleString());

    await postData(formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    getLoc(latitude, longitude);
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
              value={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <div>Tel:</div>
            <input
              type="number"
              id="number"
              name="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div>
            <div>Car model:</div>
            <input
              type="text"
              id="model"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Nexia 2"
              required
            />
          </div>
          <div>
            <div>Car color:</div>
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="white"
              required
            />
          </div>
          <div>
            <div>Car number:</div>
            <input
              type="text"
              value={carnum}
              id="carnum"
              name="carnum"
              onChange={(e) => setCarnum(e.target.value)}
              placeholder="AA 777 A"
              required
            />
          </div>
          <div>
            <div>Photo in current place:</div>
            <input
              className="file"
              type="file"
              id="img"
              name="img"
              // value={img}
              // ref={img}
              onChange={(e) => setImg(e.target.files[0])}
              placeholder="Enter photo"
              required
            />
          </div>
          <div>
            <div>Location:</div>
            <button className="gps" type="button" onClick={position}>
              press here for location
            </button>
          </div>

          {latitude ? (
            <div>
              <i>{latitude + "; " + longitude}</i>
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
