import React, { useState } from "react";
import {
Ctiy_Get, get_city
} from "../Redux/City/action";
import { useDispatch } from "react-redux";

export const Addctiy = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const details = {
      country_name: country,
      city_name: city,
      population: population,
    };

    dispatch(get_city(details));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Country Name"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="City Name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Total Population"
        value={population}
        onChange={(e) => {
          setPopulation(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};