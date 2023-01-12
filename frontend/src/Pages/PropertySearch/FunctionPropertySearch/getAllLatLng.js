import axios from "axios";

const getAllLatLng = (setProperties, propertyArray) => {
  propertyArray.map((property) => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${property.fullAddress}&key=AIzaSyBYryRvUJtyQ2udhOHZNs5q7i85TQX6bsQ`;

    axios
      .get(URL)
      .then((response) => {
        property.geoCode = response.data.results[0].geometry.location;
      })
      .catch((error) => {
        console.log(error.message);
      });

    return null;
  });

  setProperties(propertyArray);
};

export default getAllLatLng;
