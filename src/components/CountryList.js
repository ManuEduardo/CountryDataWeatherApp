import React, { useState, useEffect } from "react";
import CountryInfo from "./CountryInfo";

const CountryList = ({ list }) => {
  const [detailsCountry, setDetailsCountry] = useState([]);

  useEffect(() => {
    setDetailsCountry([false, {}]);
  }, [list]);

  const clickCountries = (country) => {
    setDetailsCountry([true, country]);
  };

  if (detailsCountry[0]) return <CountryInfo nation={detailsCountry[1]} />;
  if (list.length > 10)
    return (
      <p className="mt-36 md:mt-40 font-sans text-4xl font-medium text-center">
        Too many matches, specify another filter
      </p>
    );
  if (list.length === 1) return <CountryInfo nation={list[0]} />;

  return (
    <>
      {list.map((country) => {
        return (
          <div
            key={country.name.official}
            className=" rounded-lg my-4 p-2 flex justify-between shadow-md hadow-indigo-500/40 transition-transform hover:scale-95"
          >
            <p className="font-sans text-lg font-medium py-2 text-indigo-50 drop-shadow-xl">
              {country.name.common}{" "}
            </p>
            <button
              onClick={() => clickCountries(country)}
              className="bg-teal-200 px-4 py-0 rounded-full ml-2 transition-transform hover:shadow-md hover:scale-110 hover:shadow-teal-400"
            >
              Show
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CountryList;
