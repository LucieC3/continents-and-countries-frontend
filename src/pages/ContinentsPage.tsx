import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../graphql';
import { Input } from 'antd';

interface Continent {
  code: string;
  name: string;
}

interface ContinentsPageProps {
  continents: Continent[];
}

const ContinentsPage = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
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

  const filteredContinents = data.continents.filter((continent: Continent) =>
    continent.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>List of Continents</h1>
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
      />
      <ul>
        {filteredContinents.map((continent: Continent) => (
          <li key={continent.code}>
            <a href={`/continents/${continent.code}`}>{continent.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContinentsPage;
