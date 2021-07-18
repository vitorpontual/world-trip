import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  img: string;
  city: string;
  country: string;
  flag: string;
}

export default function City({img, city, country, flag}: CityProps ) {
  return (
    <Box
      borderRadius={4}
      overflow='hidden'
    >
      <Image
        src={img}
        h='170px'
        w='100%'
        alt='londonbridge'/>
      <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>{city}</Heading>
          <Text mt='3' fontSize='md' color='gray.500' fontWeight='500'>{country}</Text>
        </Flex>
        <Image src={flag} h='30px' w='30px' borderRadius='50%' objectFit='cover' />
      </Flex>
    </Box>
  )
}