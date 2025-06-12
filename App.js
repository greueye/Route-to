
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";

const containerStyle = { width: "100%", height: "500px" };
const center = { lat: 12.9716, lng: 77.5946 };

function App() {
  const [user, setUser] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const signIn = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const signOut = () => auth.signOut();

  const getRoute = async () => {
    const res = await fetch(`http://localhost:8000/route?origin=${origin}&destination=${destination}`);
    const data = await res.json();
    const routeService = new window.google.maps.DirectionsService();
    routeService.route({
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === "OK") setDirections(result);
    });
  };

  return user ? (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user.displayName}</h2>
      <button onClick={signOut}>Sign Out</button>
      <div style={{ margin: "20px 0" }}>
        <input placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} />
        <input placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
        <button onClick={getRoute}>Get Route</button>
      </div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  ) : (
    <div style={{ padding: "20px" }}>
      <h2>Please sign in to use the map</h2>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
