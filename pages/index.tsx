import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Script from 'next/script';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';

export const getStaticProps = async () => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_IPIFY_API_KEY}`
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
      {/* <Script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`}></Script> */}
    </Box>
  );
};

export default Home;
