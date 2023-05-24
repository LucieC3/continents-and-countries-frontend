import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../graphql';

const Continents = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  return (
    <ul>
      {data.continents.map((continent: any) => (
        <li key={continent.code}>{continent.name}</li>
      ))}
    </ul>
  );
};

export default Continents;
