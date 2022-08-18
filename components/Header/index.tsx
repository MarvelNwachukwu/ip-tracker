import { Box, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { DetailsCard } from '../DetailsCard';
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';

export const Header = ({ clientDetails }: { clientDetails: any }) => {
  const [userIpAddress, updateUserIpAddress] = React.useState<any>(
    clientDetails.ip
  );

  const center = {
    lat: clientDetails.location.lat,
    lng: clientDetails.location.lng,
  };

  const center2 = React.useMemo(() => {
    lat: clientDetails.location.lat;
    lng: clientDetails.location.lng;
  }, [clientDetails.location.lat, clientDetails.location.lng]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.MAPS_API_KEY}`,
  });

  return (
    <>
      <Flex
        flexDir={'column'}
        py={'2rem'}
        gap={'2rem'}
        alignItems={'center'}
        minH={'280px'}
        bgImage={'/pattern-bg.png'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
      >
        <Text
          textColor={'white'}
          fontSize={'24px'}
          fontWeight={700}
          fontFamily={''}
        >
          IP Address Tracker
        </Text>
        <FormControl maxW={{ base: '100%', md: '50%' }} display={'flex'}>
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
            // onClick={() => {
            //   getIPdetails('102.89.33.96');
            // }}
          />
        </FormControl>
      </Flex>
      <DetailsCard clientDetails={clientDetails} />
      {!isLoaded ? <Box>Loading...</Box> : <MapBox coordinates={center} />}
    </>
  );
};

const MapBox = ({ coordinates }: { coordinates: any }) => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: '-5rem 0 0 0',
  };
  console.log(coordinates);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={10}
    >
      <MarkerF position={coordinates} />
    </GoogleMap>
  );
};
