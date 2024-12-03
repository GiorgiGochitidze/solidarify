const LocationsCard = ({location, joinTime, street, mapUrl}) => {
  return (
    <div className="places-container">
      <div className="location-description">
        <p style={{ marginLeft: "50px" }}>
          <b>ლოკაცია:</b> <br />
          <span style={{ marginLeft: "10px" }}>{location}</span>
        </p>

        <p style={{ marginLeft: "50px" }}>
          <b>ქუჩა:</b> <br />
          <span style={{ marginLeft: "10px" }}>{street}</span>
        </p>

        <p style={{ marginLeft: "50px" }}>
          <b>შეკრების დრო:</b> <br />
          <span style={{ marginLeft: "10px" }}>{joinTime}</span>
        </p>
      </div>

      <div className="map-container">
        <iframe
          src={mapUrl}
          width="600"
          height="450"
          style={{ border: 0, marginRight: "10px", borderRadius: "10px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationsCard;
