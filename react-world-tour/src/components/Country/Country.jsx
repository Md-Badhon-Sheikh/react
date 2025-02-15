import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    // console.log(country)
    const [visited, setVisited] =useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    
    const {name, capital, flags, area, population} = country;

    // console.log(handleVisitedCountry)
    return (
        <div className={`border-2 p-2 rounded-xl m-2 ${visited && 'bg-orange-200'}`}> 
        {/* // conditional css  */}
            <h2 className="text-xl">Name: {name.common} </h2>
            <h2 className="text-lg">Capital: {capital} </h2>
            <p>Populations: {population}</p> 
            <p>Area: {area}</p>
            <img className="items-center" src={flags.png} alt="" />

            <button className="border-2 p-2 rounded-xl mt-3" onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <br></br>

            <button className="border-2 p-2 rounded-xl mt-3" onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br></br>

            <button className="border-2 p-2 rounded-lg mt-3" onClick={handleVisited}> {visited? 'Visited' : ' Going'} </button><br></br>

            {visited ? 'I have visited this Country' : 'I want to Visit'}

            <hr />

            <CountryDetail
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}

            ></CountryDetail>
        </div>
    );
};

export default Country;