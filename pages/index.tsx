import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { PageHead } from '../components/Head'
import { Header } from '../components/Header'

export const getStaticProps = async () => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_IPIFY_API_KEY}}`
    // `https://jsonplaceholder.typicode.com/users`
  );
  const data = await res.json();

  return {
    props: {
      clientDetails: data
    },
  };
}


const Home: NextPage = ({ clientDetails }) => {
  return (
    <Box fontFamily={`'Rubik', sans-serif`}>
      <PageHead title={'IP Address Tracker'} />
      <Header clientDetails={clientDetails} />
      {process.env.GEO_IPIFY_API_KEY}
    </Box>
  )
}

export default Home
