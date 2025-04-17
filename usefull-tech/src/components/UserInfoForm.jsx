import React, { useState } from "react";

const UserInfoForm = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = {
          language: navigator.language,
          isOnline: navigator.onLine,
          userData: navigator.userAgentData || navigator.userAgent,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };

        setUserInfo(data);
        console.log(data);
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  return (
    <div>
      <div className="mapContainer">
        <p className="mapP">
          <strong>Language:</strong>

          <span style={{ margin: "0 13.5rem" }}>
            {userInfo ? userInfo.language : ""}
          </span>
        </p>
        <p className="mapP">
          <strong>Online Status:</strong>
          <span style={{ margin: "0 11.5rem" }}>
            {userInfo ? (userInfo.isOnline ? "Yes" : "No") : ""}
          </span>
        </p>

        <p className="mapGeo">GeoDataLocation</p>
        <p className="mapP">
          <strong>Latitude:</strong>
          <span style={{ margin: "0 14.2rem" }}>
            {userInfo ? userInfo.lat : ""}
          </span>
        </p>
        <p className="mapP">
          <strong>Longitude:</strong>
          <span style={{ margin: "0 13.5rem" }}>
            {userInfo ? userInfo.long : ""}{" "}
          </span>
        </p>
      </div>

      <form className="mapForm" onSubmit={handleSubmit}>
        <button className="mapBtn" type="submit">
          Get Location
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default UserInfoForm;
