function App() {
  return (
    <div className="App">
      <h2 className="ttl">Share Location</h2>
      <div>
        <form>
          <div className="info">
            <div>
              <h3>Name</h3>
              <h3>Phone Number</h3>
              <h3>Photo</h3>
              <h3>Location</h3>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Enter name" />
              <input type="number" placeholder="Enter phone number" />
              <input className="file" type="file" placeholder="Enter photo" />
              <input type="text" placeholder="Enter current location" />
            </div>
          </div>

          <input className="sbtn" type="submit" />
        </form>
      </div>
      <div className="boxes">
        <div className="mapbox">LOCATION in MAP</div>
        <div className="mapbox">PICTURE</div>
      </div>
    </div>
  );
}

export default App;
