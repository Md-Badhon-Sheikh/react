import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] =useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = country => {
    const newVisitedCountries =[...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlags = flag =>{
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  return (
    <div>
      <h3 className="text-xl font-semibold">Countries: {countries.length}</h3>

      <div>
        <h4 className="text-lg">Visited Countries: {visitedCountries.length} </h4>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cco3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="w-24 flex gap-2">
        {
            visitedFlags.map((flag, index) => <img key={index} src={flag}></img> )
        }

      </div>
            
            {/* Display Country  */}

      <div className="grid grid-cols-4 gap-3">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
