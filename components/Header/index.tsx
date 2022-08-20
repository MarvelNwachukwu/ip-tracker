import { Box, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { DetailsCard } from '../DetailsCard';
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';

export const Header = ({ clientDetails }: { clientDetails: any }) => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(clientDetails)

  const [userIpAddress, updateUserIpAddress] = useState<any>(
    data.ip
  );

  const center = {
    lat: data.location.lat,
    lng: data.location.lng,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.MAPS_API_KEY}`,
  });

  useEffect(() => {
    if (isLoading) {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_IPIFY_API_KEY}&ipAddress=${userIpAddress}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }
  }, [isLoading, userIpAddress])


  return (
    <>
      <Flex
        flexDir={'column'}
        py={'2rem'}
        gap={'2rem'}
        alignItems={'center'}
        minH={{ base: '280px', md:'280px'}}
        bgImage={'/pattern-bg.png'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        position={"relative"}
      >
        <Text
          textColor={'white'}
          fontSize={'24px'}
          fontWeight={700}
          fontFamily={''}
        >
          IP Address Tracker
        </Text>
        <FormControl maxW={{ base: '80%', md: '50%' }} display={'flex'}>
          <Input
            type='text'
            placeholder='Search for any IP address or domain'
            borderRightRadius={0}
            borderLeftRadius={'10px'}
            border={'none'}
            outline={'none'}
            bg={'white'}
            value={userIpAddress}
            onChange={(input) => {
              updateUserIpAddress(input.target.value);
            }}
            enterKeyHint={'enter'}
          />
          <Box
            h={'40px'}
            w={'60px'}
            bg={'black'}
            bgImage={'./icon-arrow.svg'}
            bgRepeat={'no-repeat'}
            bgPos={'center'}
            bgSize={'20%'}
            borderRightRadius={'10px'}
            cursor={'pointer'}
            onClick={() => {
              setLoading(true)
            }}
          />
        </FormControl>
        
      </Flex>
      <DetailsCard clientDetails={data} />
      {!isLoaded ? <Box>Loading...</Box> : <MapBox coordinates={center} />}
    </>
  );
};

const MapBox = ({ coordinates }: { coordinates: any }) => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
  };
  return (
    <Box bg={'teal.100'} mt={{base: '-21.2rem', md: '-5rem'}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={10}
      >
        <MarkerF position={coordinates} />
      </GoogleMap>
    </Box>
  );
};
