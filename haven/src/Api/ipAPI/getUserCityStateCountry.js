import axios from "axios";

//gets user's city, regionCode(state, ex:CA), countryName from user's IP address
//ONLY CALL IN COMPONENTDIDMOUNT SO THAT IT USES THE CLIENT SIDE (NOT SERVER SIDE) IP ADDRESS

export default function getUserCityStateCountry() {
  console.log("get request");
  axios
    .get("https://ipapi.co/json/")
    .then((response) => {
      let data = response.data;
      this.setState({
        countryName: data.country_name, //USA
        regionCode: data.region_code, //State (out of 50) CA
        city: data.city, //Campbell, etc
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
