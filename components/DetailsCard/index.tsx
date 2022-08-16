import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

export const DetailsCard = () => {
  return (
    <Flex
      bg={'white'}
      p={'2rem'}
      borderRadius={'10px'}
      boxShadow={'lg'}
      mb={'-5rem'}
      minW={'80%'}
      h={'150px'}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          IP ADDRESS
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          192.168.91.12
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          LOCATION
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          Brooklyn, NY 10001
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          TIMEZONE
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          UTC -05:00
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          ISP
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          SpaceX Starlink
        </Text>
      </Box>
    </Flex>
  );
};
