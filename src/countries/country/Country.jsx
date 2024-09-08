import { useState } from 'react';
import './Country.css'

const Country = ({ SingleCountry, setAsMarkCountries }) => {
    const { name, flags, population, area, cca3 } = SingleCountry;

    const [visited, setVisited] = useState(false);
    console.log(flags);

    const isVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className="continer">


            <img className='image ' src={flags.png} alt="" />

            <h2>Country Name: {name.common}</h2>
            <p style={{ color: visited ? 'green' : 'red', fontSize: visited ? '20px' : '10px' }}>Area: {area}</p>
            <p>Population: {population}</p>
            <p>code: {cca3}</p>
            <button onClick={() => setAsMarkCountries(SingleCountry)} className='btn'>set as mark</button>

            <div>
                <button onClick={isVisited} className={`btn ${visited && 'bgbtn'}`}>{visited ? 'visited' : 'not visited'}</button><span style={{color:'black'}}>
                {visited ? 'you have visited this country' : 'you need to visit this country'}
                </span>
            </div>

        </div>
    );
};

export default Country;