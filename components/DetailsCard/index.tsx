import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

export const DetailsCard = ({ clientDetails }: { clientDetails: any }) => {
  return (
    <Flex
      bg={'white'}
      p={'2rem'}
      borderRadius={'10px'}
      boxShadow={'lg'}
      w={'80%'}
      m={'-5rem auto 0 auto'}
      h={'150px'}
      justifyContent={'space-around'}
      alignItems={'center'}
      zIndex={2}
      position='relative'
    >
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          IP ADDRESS
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {clientDetails?.ip}
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          LOCATION
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {/* Brooklyn, NY 10001 */}
          {`${clientDetails?.location.city}, ${clientDetails?.location.region} ${clientDetails?.location.postalCode}`}
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          TIMEZONE
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          UTC{' '}
          {clientDetails?.location.timezone}
        </Text>
      </Box>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Box>
        <Text fontSize={'14px'} color={'brand.800'}>
          ISP
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {clientDetails?.isp}
        </Text>
      </Box>
    </Flex>
  );
};
