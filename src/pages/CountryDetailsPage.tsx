import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_COUNTRY_DETAILS } from '../graphql';

const CountryDetailsPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { countryCode },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  const { name, capital, currency, emojiU } = data.country;

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Currency: {currency}</p>
      <img src={emojiU} alt={name} style={{ width: '200px' }} />
    </div>
  );
};

export default CountryDetailsPage;
