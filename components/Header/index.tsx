import { Box, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { DetailsCard } from '../DetailsCard';

export const Header = ({ clientDetails }) => {
  const [userIpAddress, updateUserIpAddress] = React.useState<any>(clientDetails);

  return (
    <Flex
      flexDir={'column'}
      // justifyContent={'space-around'}
      gap={'1rem'}
      alignItems={'center'}
      minH={'200px'}
      bg={'teal.100'}
      bgImage={'/pattern-bg.png'}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'100%'}
    >
      <Text
        textColor={'white'}
        fontSize={'24px'}
        fontWeight={700}
        fontFamily={''}
      >
        IP Address Tracker
      </Text>
      <FormControl
        maxW={{ base: '100%', md: '50%' }}
        display={'flex'}
        bg={'teal'}
      >
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
      <DetailsCard />
    </Flex>
  );
};
