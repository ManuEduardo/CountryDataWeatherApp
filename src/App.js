import React, { useState, useEffect } from "react";
import axios from "axios";

import Find from "./components/Find";
import CountryList from "./components/CountryList";

function App() {
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const regexFilter = new RegExp(`${filter}`, "i");
  const countriesFilter = countries.filter((country) =>
    regexFilter.test(country.name.common)
  );
  const countriesList = filter.trim() === "" ? countries : countriesFilter;

  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div className="App container m-0 min-h-screen min-w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Find theFilter={filter} handleFilterChange={handleFilterChange} />
      <CountryList list={countriesList} />
    </div>
  );
}

export default App;
