import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

export const DetailsCard = ({ clientDetails }: { clientDetails: any }) => {
  return (
    <Flex
      bg={'white'}
      p={'2rem'}
      borderRadius={'10px'}
      boxShadow={'lg'}
      w={'80%'}
      m={{ base: '-15rem auto 0 auto',md:'-5rem auto 0 auto'}}
      h={{ base: 'max-content', md: '150px' }}
      justifyContent={'space-around'}
      alignItems={'center'}
      flexDir={{base: 'column', md: 'row'}}
      gap={{base:'1rem', md: 0}}
      zIndex={2}
      position='relative'
    >
      <Flex flexDir={'column'} alignItems={{base:'center', md:'flex-start'}}>
        <Text fontSize={'14px'} color={'brand.800'}>
          IP ADDRESS
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {clientDetails?.ip}
        </Text>
      </Flex>
      <Spacer bg={'lightgrey'} h={{ base: '2px', md: '100%' }} maxW={{ base: '100%', md: '2px' }} />
      <Flex flexDir={'column'} alignItems={{base:'center', md:'flex-start'}}>
        <Text fontSize={'14px'} color={'brand.800'}>
          LOCATION
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {`${clientDetails?.location.city}, ${clientDetails?.location.region} ${clientDetails?.location.postalCode}`}
        </Text>
      </Flex>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Flex flexDir={'column'} alignItems={{base:'center', md:'flex-start'}}>
        <Text fontSize={'14px'} color={'brand.800'}>
          TIMEZONE
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          UTC{' '}
          {clientDetails?.location.timezone}
        </Text>
      </Flex>
      <Spacer bg={'lightgrey'} h={'100%'} maxW={'2px'} />
      <Flex flexDir={'column'} alignItems={{base:'center', md:'flex-start'}}>
        <Text fontSize={'14px'} color={'brand.800'}>
          ISP
        </Text>
        <Text fontWeight={700} fontSize={'1.2rem'}>
          {clientDetails?.isp}
        </Text>
      </Flex>
    </Flex>
  );
};
