import axios from "axios";

const getRegionSuburbLatLng = (givenArea, setMapCenter) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${givenArea}, New Zealand&key=AIzaSyBYryRvUJtyQ2udhOHZNs5q7i85TQX6bsQ`;

  console.log(givenArea);
  axios
    .get(URL)
    .then((response) => {
      console.log(response.data.results[0].geometry.location);
      setMapCenter(response.data.results[0].geometry.location);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default getRegionSuburbLatLng;
