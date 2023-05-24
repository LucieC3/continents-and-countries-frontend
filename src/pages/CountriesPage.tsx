import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_COUNTRIES_BY_CONTINENT } from '../graphql';
import { Input } from 'antd';

interface Country {
  code: string;
  name: string;
}

const CountriesPage = () => {
  const { continentCode } = useParams<{ continentCode: string }>();
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: { continentCode },
  });
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  const filteredCountries = data.continent.countries.filter((country: Country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>List of Countries in {continentCode}</h1>
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
      />
      <ul>
        {filteredCountries.map((country: Country) => (
          <li key={country.code}>
            <a href={`/countries/${country.code}`}>{country.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesPage;
