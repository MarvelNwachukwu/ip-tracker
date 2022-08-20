import { Box } from '@chakra-ui/react';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';

export const getStaticProps = async () => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_IPIFY_API_KEY}&ipAddress=`
  );
  const data = await res.json();

  return {
    props: {
      clientDetails: data,
    },
  };
};

type clientDetailsType = {
  clientDetails: any
}

const Home = ({ clientDetails }: clientDetailsType) => {
  return (
    <Box fontFamily={`'Rubik', sans-serif`}>
      <PageHead title={'IP Address Tracker'} />
      <Header clientDetails={clientDetails} />
    </Box>
  );
};

export default Home;
