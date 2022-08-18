import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Script from 'next/script';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';

export const getStaticProps = async () => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_422TmiGDYaSVNLT8v8o3deZRXHiXo`
  );
  const data = await res.json();

  return {
    props: {
      clientDetails: data,
    },
  };
};

const Home: NextPage = ({ clientDetails }) => {
  console.log(process.env.MAPS_API_KEY)
  return (
    <Box fontFamily={`'Rubik', sans-serif`}>
      <PageHead title={'IP Address Tracker'} />
      <Header clientDetails={clientDetails} />
      <Script
        src={'https://unpkg.com/leaflet@1.8.0/dist/leaflet.js'}
        integrity={
          'sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=='
        }
      ></Script>
      {/* <Script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`}></Script> */}
    </Box>
  );
};

export default Home;
