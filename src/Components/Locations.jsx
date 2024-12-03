import "./CSS/locations.css";
import LocationsCard from "./LocationsCard";

const Locations = () => {

  const location = window.location.pathname === "/Locations";

  return (
    <div style={location ? { marginTop: "90px" } : {}} className="locations-container">
      <h1>ლოკაციები:</h1>

      <LocationsCard
        mapUrl={
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2665.667094013957!2d41.61319304915538!3d41.6325830016194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sge!4v1733225053282!5m2!1sru!2sge"
        }
        street={"კობალაძე 15"}
        location={"ბათუმი"}
        joinTime={"18:00"}
      />
      <LocationsCard
        mapUrl={
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2665.667094013957!2d41.61319304915538!3d41.6325830016194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sge!4v1733225053282!5m2!1sru!2sge"
        }
        street={"რუსთაველი"}
        location={"თბილისი"}
        joinTime={"15:00"}
      />
    </div>
  );
};

export default Locations;
