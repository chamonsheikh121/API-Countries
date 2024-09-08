import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './Countries.css'




const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [markCountries, setMarkCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    const setAsMarkCountries = country => {

        console.log(country)
        const visitedCountries = [...markCountries, country];
        setMarkCountries(visitedCountries)


    }





    return (
        <div>


            <h1 className="font-bold text-4xl text-center uppercase">API countries</h1>
            <h2 className="mb-5 font-poppins font-bold">visited countries: {markCountries.length}</h2>
            <div>
                <ul className="visited-flags grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 text-center">
                    {
                        markCountries.map(country => <li className="liItemsCenter" key={country.cca3}>
                             <img className="" src={country.flags.png} alt="" />
                           <span className="text-sm"> {country.name.common}</span>
                           </li>
                        )

                    }

                </ul>
            </div>
            <div className="main-container">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {
                        countries.map(country => <Country SingleCountry={country} key={country.cca3}
                            setAsMarkCountries={setAsMarkCountries}
                        ></Country>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Countries;